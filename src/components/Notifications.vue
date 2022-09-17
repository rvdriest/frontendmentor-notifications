<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useNotificationsStore } from '../store/notifications';
import JoinedYourGroupNotificationItem from './NotificationItems/JoinedYourGroupNotificationItem.vue';
import ReactionRecentPostNotificationItem from './NotificationItems/ReactionRecentPostNotificationItem.vue';
import NewFollowerNotificationItem from './NotificationItems/NewFollowerNotificationItem.vue';
import ReactionOnPictureNotificationItem from './NotificationItems/ReactionOnPictureNotificationItem.vue';
import PrivateMessageNotificationItem from './NotificationItems/PrivateMessageNotificationItem.vue';
import LeftYourGroupNotificationItem from './NotificationItems/LeftYourGroupNotificationItem.vue';
import { computed } from 'vue';

const store = useNotificationsStore();

const { allNotifications } = storeToRefs(store);
const { markAllAsRead } = store;

const unreadNotificationsCount = computed(() => allNotifications.value.filter((notification) => !notification.read).length);
</script>

<template>
	<div class="md:w-2/3 min-h-screen md:min-h-fit max-w-3xl w-full bg-white px-8 py-8 rounded-xl shadow-sm">
		<div class="flex items-end justify-between">
			<h1 class="font-extrabold text-2xl text-grayish-blue-600">Notifications <span class="bg-primary-blue text-white ml-2 px-3 rounded-md text-lg font-medium">{{unreadNotificationsCount}}</span></h1>
			<button class="cursor-pointer text-gray-500 hover:text-primary-blue" @click="markAllAsRead">Mark all as read</button>
		</div>
		<div class="flex flex-col space-y-2 mt-6">
			<template v-for="notification in allNotifications" :key="notification.id">
				<JoinedYourGroupNotificationItem v-if="notification.type === 'joined-your-group'" :notification="notification" />
				<ReactionRecentPostNotificationItem v-else-if="notification.type === 'reaction-recent-post'" :notification="notification" />
				<NewFollowerNotificationItem v-else-if="notification.type === 'new-follower'" :notification="notification" />
				<ReactionOnPictureNotificationItem v-else-if="notification.type === 'reaction-on-picture'" :notification="notification" />
				<PrivateMessageNotificationItem v-else-if="notification.type === 'private-message'" :notification="notification" />
				<LeftYourGroupNotificationItem v-else-if="notification.type === 'left-your-group'" :notification="notification" />
			</template>
		</div>
	</div>
</template>