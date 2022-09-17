<script lang="ts" setup>
import { Notification } from '../../lib/types/notification.type';
import BaseNotificationItem from '../BaseNotificationItem.vue';
interface Props {
	notification: Notification;
}
const { notification } = defineProps<Props>();
</script>

<template>
	<BaseNotificationItem 
		:title="{
			elements: [
				{ content: 'reacted to your recent post', type: 'text' },
				{ content: notification.data.post.title, type: 'link' },
			]
		}"
		:id="notification.id"
		:profilePicture="notification.createdBy.profilePicture"
		:name="notification.createdBy.username"
		:createdAt="notification.createdAt"
		:read="notification.read"
	/>
</template>