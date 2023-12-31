<template>
    <article class="flex items-center justify-between gap-x4 px-x4 py-x2">
        <div class="max-w-10/12">
            <div class="flex items-center gap-x2">
                <component
                    :is="icon"
                    class="h-x4 w-auto text-surface-brand"
                ></component>

                <div class="truncate text-paragraph-small text-primary">
                    {{ file.name }}
                </div>
            </div>

            <ProgressRoot
                v-if="state === 'transferring'"
                :model-value="clampedProgress"
                class="progress translate- mt-x2 h-x1 overflow-hidden rounded-full bg-surface-tertiary"
            >
                <ProgressIndicator
                    class="indicator h-full w-full rounded-full bg-surface-brand"
                    :style="`transform: translateX(-${100 - clampedProgress}%)`"
                />
            </ProgressRoot>

            <span class="mt-x2 text-paragraph-x-small uppercase text-secondary">
                {{ filesizeString(file.size, "b") }}
            </span>
        </div>

        <button
            :disabled="state === 'done'"
            class="text-surface-tertiary"
            @click="handleBtnClick"
        >
            <XIcon v-if="state === 'base'" class="h-x6 w-auto" />
            <PlayIcon v-if="state === 'paused'" class="h-x6 w-auto" />
            <PauseIcon v-if="state === 'transferring'" class="h-x6 w-auto" />
            <CheckIcon
                v-if="state === 'done'"
                class="h-x6 w-auto text-surface-brand"
            />
        </button>
    </article>
</template>

<script setup lang="ts">
import CheckIcon from "#src/icons/CheckIcon.vue";
import FileIcon from "#src/icons/FileIcon.vue";
import ImageIcon from "#src/icons/ImageIcon.vue";
import MusicIcon from "#src/icons/MusicIcon.vue";
import PauseIcon from "#src/icons/PauseIcon.vue";
import PlayIcon from "#src/icons/PlayIcon.vue";
import VideoIcon from "#src/icons/VideoIcon.vue";
import XIcon from "#src/icons/XIcon.vue";
import { computed } from "vue";
import { ProgressRoot, ProgressIndicator } from "radix-vue";
import { clamp } from "lodash";

export interface FileItemProps {
    file: File;
    state?: "base" | "transferring" | "paused" | "done";
    progress?: number;
}

export type FileItemEmits = {
    remove: [];
    pause: [];
    resume: [];
};

const props = withDefaults(defineProps<FileItemProps>(), {
    state: "base",
    progress: 0,
});
const emit = defineEmits<FileItemEmits>();

const iconRegexp = {
    image: /^image.*/,
    audio: /^audio.*/,
    video: /^video.*/,
};

const icon = computed(() => {
    if (props.file.type.match(iconRegexp.image)?.length) {
        return ImageIcon;
    }

    if (props.file.type.match(iconRegexp.audio)?.length) {
        return MusicIcon;
    }

    if (props.file.type.match(iconRegexp.video)?.length) {
        return VideoIcon;
    }

    return FileIcon;
});

function filesizeString(size: number, unit: "b" | "kb" | "mb" | "gb") {
    if (size < 1000) {
        return `${Math.round(size)} ${unit}`;
    }

    if (unit === "b") {
        return filesizeString(size / 1000, "kb");
    }

    if (unit === "kb") {
        return filesizeString(size / 1000, "mb");
    }

    if (unit === "mb") {
        return filesizeString(size / 1000, "gb");
    }
}

function handleBtnClick() {
    if (props.state === "base") {
        emit("remove");
    } else if (props.state === "paused") {
        emit("resume");
    } else if (props.state === "transferring") {
        emit("pause");
    }
}

const clampedProgress = computed(() => {
    return clamp(props.progress, 0, 100);
});
</script>

<style scoped lang="scss">
.progress {
    .indicator {
        transition: transform 660ms cubic-bezier(0.65, 0, 0.35, 1);
    }
}
</style>
