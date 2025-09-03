<script setup lang="ts">
import DashboardHeader from "~/components/DashboardHeader.vue";
import DashboardSidebar from "~/components/DashboardSidebar.vue";
</script>
<template>
	<div class="flex flex-col min-h-screen w-full bg-white">
		<DashboardHeader/>
		<div class="flex flex-1">
			<DashboardSidebar/>
			<div class="flex-1 p-6">
				<div class="p-8">
					<slot></slot>
				</div>
			</div>
		</div>
	</div>
</template>