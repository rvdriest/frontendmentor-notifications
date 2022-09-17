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
				{ content: 'left the group', type: 'text' },
				{ content: notification.data.group.name, type: 'link-primary' },
			]
		}"
		:id="notification.id"
		:profilePicture="notification.createdBy.profilePicture"
		:name="notification.createdBy.username"
		:createdAt="notification.createdAt"
		:read="notification.read"
	/>
</template>