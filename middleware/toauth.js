export default defineNuxtRouteMiddleware((to, from) => {
	const authtoken = useCookie('authtoken').value;
  
	if (!authtoken) {
	  return navigateTo('/auth/login');
	}
  });
  