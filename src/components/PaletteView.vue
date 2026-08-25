<template>
    <div class="wrapper" ref="wrapperRef">
        <div
            class="color"
            :style="{ backgroundColor: colors[0], width: `${leftPositions[0]}%` }"
        ></div>
        <div
            class="handle"
            :style="{ left: `${leftPositions[0]}%` }"
            @mousedown="startDrag(0, $event)"
            :class="{ dragging: dragIndex === 0 }"
        ></div>
        <div
            class="color"
            :style="{ backgroundColor: colors[1], left: `${leftPositions[0]}%`, width: `${leftPositions[1] - leftPositions[0]}%` }"
        ></div>
        <div
            class="handle"
            :style="{ left: `${leftPositions[1]}%` }"
            @mousedown="startDrag(1, $event)"
            :class="{ dragging: dragIndex === 1 }"
        ></div>
        <div
            class="color"
            :style="{ backgroundColor: colors[2], left: `${leftPositions[1]}%`, width: `calc(100% - ${leftPositions[1]}%)` }"
        ></div>
    </div>
</template>

<script setup>
    import { ref, onBeforeUnmount } from 'vue'

    const colors = ref(['red', 'green', 'blue'])
    const dragIndex = ref(-1)
    const dragStartX = ref(0)
    const dragStartPositions = ref([0, 0])

    const wrapperRef = ref(null)

    const leftPositions = ref([33.33, 66.67])

    function startDrag(index, event) {
        event.preventDefault()
        dragIndex.value = index
        dragStartX.value = event.clientX
        dragStartPositions.value = [...leftPositions.value]

        document.addEventListener('mousemove', onDrag)
        document.addEventListener('mouseup', stopDrag)
    }

    function onDrag(event) {
        if (dragIndex.value === -1) return

        const wrapper = wrapperRef.value
        if (!wrapper) return

        const wrapperRect = wrapper.getBoundingClientRect()
        const pixelDiff = event.clientX - dragStartX.value
        const percentDiff = (pixelDiff / wrapperRect.width) * 100

        const newPos = dragStartPositions.value[dragIndex.value] + percentDiff
        const minHandle = 10
        const maxHandle = 90
        const minMiddle = 10

        let clampedPos = newPos
        if (dragIndex.value === 0) {
            // Left handle: can't go past leftPositions[1] - minMiddle
            clampedPos = Math.min(newPos, leftPositions.value[1] - minMiddle)
        } else {
            // Right handle: can't go past leftPositions[0] + minMiddle
            clampedPos = Math.max(newPos, leftPositions.value[0] + minMiddle)
        }
        clampedPos = Math.min(Math.max(clampedPos, minHandle), maxHandle)

        const newPositions = [...leftPositions.value]
        newPositions[dragIndex.value] = clampedPos
        leftPositions.value = newPositions
    }

    function stopDrag() {
        dragIndex.value = -1
        document.removeEventListener('mousemove', onDrag)
        document.removeEventListener('mouseup', stopDrag)
    }

    onBeforeUnmount(() => {
        document.removeEventListener('mousemove', onDrag)
        document.removeEventListener('mouseup', stopDrag)
    })
</script>

<style scoped>
    .wrapper {
        position: relative;
        width: 80vw;
        height: 50vh;
    }

    .color {
        position: absolute;
        top: 0;
        bottom: 0;
    }

    .handle {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 12px;
        margin-left: -6px;
        cursor: col-resize;
        z-index: 10;
    }

    .handle:hover {
        background-color: rgba(255, 255, 255, 0.3);
    }

    .handle.dragging {
        background-color: rgba(255, 255, 255, 0.5);
    }
</style>
