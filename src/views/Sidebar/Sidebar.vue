<template>
    <div>
        <a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
		<aside id="colorlib-aside" role="complementary" class="border js-fullheight">
			<h1 id="colorlib-logo"><RouterLink to="/">Biyo <br> Funiture</RouterLink></h1>
			<nav id="colorlib-main-menu" role="navigation">
				<ul>
					<li class=""><RouterLink to='/'>Home</RouterLink></li> 
					<li><RouterLink to="/Project">Project</RouterLink> </li>
					<li><RouterLink to="/About">About</RouterLink></li>
					<li><RouterLink to="/Service">Services</RouterLink></li>
					<li><RouterLink to="/Blog">Blog</RouterLink></li>
					<li><RouterLink to="/Contact">Contact</RouterLink></li>
				</ul>
			</nav>

			<div class="colorlib-footer">
				<p>Copyright by <span class="" style="color: white;">Sulaimon Taofeek (S.T.A) </span> </p>
				<ul>
					<li><a href="#"><i class="icon-facebook2"></i></a></li>
					<li><a href="#"><i class="icon-twitter2"></i></a></li>
					<li><a href="#"><i class="icon-instagram"></i></a></li>
					<li><a href="#"><i class="icon-linkedin2"></i></a></li>
				</ul>
			</div>

		</aside>
    </div>
</template>

<script>
import {  RouterLink } from 'vue-router'
export default {
name: 'SidebarView',
components: {
	RouterLink
	
}
}
</script>