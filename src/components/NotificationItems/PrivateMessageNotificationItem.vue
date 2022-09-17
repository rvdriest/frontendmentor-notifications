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
				{ content: 'sent you a private message', type: 'text' },
			]
		}"
		:id="notification.id"
		:profilePicture="notification.createdBy.profilePicture"
		:name="notification.createdBy.username"
		:createdAt="notification.createdAt"
		:read="notification.read"
	>
		<div class="border border-grayish-blue-300 rounded-md p-4 mt-2 cursor-pointer hover:bg-grayish-blue-300">
			<p class="text-grayish-blue-400">{{notification.data.message.data}}</p>
		</div>
	</BaseNotificationItem>
</template>