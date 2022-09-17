<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import { Notification } from '../../lib/types/notification.type';
import BaseNotificationItem from '../BaseNotificationItem.vue';
interface Props {
	notification: Notification;
}
const { notification } = defineProps<Props>();

const commentedOnPicture = ref();
watchEffect(async () => {
	commentedOnPicture.value = (await import(`../../assets/images/${notification.data.post.picture}.webp`)).default;
})
</script>

<template>
	<BaseNotificationItem 
		:title="{
			elements: [
				{ content: 'commented on your picture', type: 'text' },
			]
		}"
		:id="notification.id"
		:profilePicture="notification.createdBy.profilePicture"
		:name="notification.createdBy.username"
		:createdAt="notification.createdAt"
		:read="notification.read"
	>
		<template #prefix>
			<img class="w-11 h-11 cursor-pointer" :src="commentedOnPicture" alt="commented on picture"/>
		</template>
	</BaseNotificationItem>
</template>