<script lang="ts" setup>
	import { ref, watchEffect } from 'vue';
import { useNotificationsStore } from '../store/notifications';

	type NotificationTitle = {
		elements: NotificationTitleElement[];
	}

	type NotificationTitleElement = {
		content: string;
		type: 'text' | 'link' | 'link-primary';
	}

	interface Props {
		id: number;
		title: NotificationTitle;
		profilePicture: string;
		name: String;
		read: boolean;
		createdAt: string;
	}

	const props = withDefaults(defineProps<Props>(), {
		read: false,
	});
	
	const profilePicture = ref();
	watchEffect(async () => {
		profilePicture.value = (await import(`../assets/images/avatar-${props.profilePicture}.webp`)).default;
	})

	const store = useNotificationsStore();

	const { markAsRead } = store;
</script>

<template>
	<div @click="markAsRead(props.id)">
		<div class="flex items-start justify-between p-4 rounded-lg" :class="!props.read ? ['bg-grayish-blue-100'] : []">
			<div class="flex items-start justify-between w-full">
				<div class="flex items-start">
					<img :src="profilePicture" class="w-11 h-12 rounded-full" alt="User"/>
					<div class="ml-4 flex flex-col">
						<div class="flex">

							<p class="space-x-1">
								<span class="font-extrabold text-base text-grayish-blue-600 hover:text-primary-blue cursor-pointer">{{props.name}}</span>
								<template v-for="(element) in props.title.elements" :key="index">
									<template v-if="element.type === 'text'">
										<span class="text-gray-500">{{element.content}}</span>
									</template>
									<template v-else-if="element.type === 'link-primary'">
										<span class="text-primary-blue font-extrabold cursor-pointer">{{element.content}}</span>
									</template>
									<template v-else-if="element.type === 'link'">
										<span class="font-extrabold text-grayish-blue-500 cursor-pointer hover:text-primary-blue">{{element.content}}</span>
									</template>
								</template>
								<div class="w-2 h-2 bg-primary-red rounded-full inline-block" v-if="!props.read"></div>
							</p>
						</div>
						<div>
							<p class="text-grayish-blue-400">{{props.createdAt}}</p>
						</div>
						<slot />
					</div>
				</div>
				<slot name="prefix" />
			</div>
		</div>
	</div>
</template>