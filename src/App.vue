<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useNotificationsStore } from './store/notifications';
import Notifications from './components/Notifications.vue';

const store = useNotificationsStore();

const { allNotifications } = storeToRefs(store);
</script>

<template>
	<div class="w-full min-h-screen bg-grayish-blue-100 flex justify-center items-start md:py-16">
		<Notifications />
	</div>
</template>