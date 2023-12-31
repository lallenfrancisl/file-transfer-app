<template>
    <div class="inline-block" :class="{ 'w-full': fullWidth }">
        <label
            v-if="label && !hideLabel"
            :for="id"
            class="mb-2 block w-full capitalize text-white"
        >
            {{ label }}
        </label>
        <input
            :id="id"
            class="text-input w-full rounded-lg border border-[#334155] bg-[#0F172A] p-4 text-[#CBD5E1] placeholder:capitalize placeholder:text-[#64748B]"
            :class="{
                error: error,
            }"
            :type="type"
            :placeholder="placeholder"
            @input="onInput"
        />

        <div v-if="error" class="mt-2 flex items-center">
            <AlertIcon class="mr-1 h-4 w-auto text-[#F26060]" />
            <p class="text-xs text-[#F26060]">{{ error }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import AlertIcon from "#src/icons/AlertIcon.vue";
import { useId } from "radix-vue";

export interface TextInputProps {
    /**
     * Id of the input element
     */
    id?: string;

    /**
     * Label of the text input
     */
    label?: string;

    /**
     * Placeholder of the input element
     */
    placeholder?: string;

    /**
     * Type of the input
     */
    type?: "text" | "number";

    /**
     * Error message to display
     */
    error?: string;

    /**
     * Visually hide label
     *
     * @description
     * Label will be still visible to screen readers
     */
    hideLabel?: boolean;

    /**
     * When `true` input will expand to parent's width
     */
    fullWidth?: boolean;

    /**
     * Model value of the input field
     */
    modelValue?: string;
}

export type TextInputEvents = {
    "update:modelValue": [value: string];
};

withDefaults(defineProps<TextInputProps>(), {
    type: "text",
    id: () => useId(),
});
const emit = defineEmits<TextInputEvents>();

function onInput(e: Event) {
    const target = e.target as HTMLInputElement;

    emit("update:modelValue", target.value);
}
</script>

<style scoped lang="scss">
.text-input {
    &:focus {
        border-color: #7a5af8;
        box-shadow: 0px 0px 4px 2px rgba(122, 90, 248, 0.25);
        @apply outline-none;
    }

    &.error {
        border-color: #f26060;
        box-shadow: 0px 0px 4px 2px rgba(242, 96, 96, 0.25);
    }
}
</style>
