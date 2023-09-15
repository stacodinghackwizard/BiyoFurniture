<template>
    <div>
        <a href="#" class="colorlib-nav-toggle" @click="navToggle"><i></i></a>
        <aside id="colorlib-aside" role="complementary" class="border js-fullheight">
            <a class="bg-primary removeDiv" style="padding:10px; position:absolute; top:5px; right:5px; font-size:20px" @click="removeDiv">X</a>
            <h1 id="colorlib-logo"><RouterLink to="/">Biyo <br> Funiture</RouterLink></h1>
            <nav id="colorlib-main-menu" role="navigation">
                <ul>
                    <li><RouterLink to='/'>Home</RouterLink></li> 
                    <li><RouterLink to="/Project">Project</RouterLink> </li>
                    <li><RouterLink to="/About">About</RouterLink></li>
                    <li  class="colorlib-active"><RouterLink to="/Service">Services</RouterLink></li>
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
   
        <div id="colorlib-main">
            <div class="colorlib-services">
                <div class="colorlib-narrow-content">
                    <div class="row">
                        <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                            <span class="heading-meta">Services</span>
                            <h2 class="colorlib-heading">Here are some of our expertise</h2>
                        </div>
                    </div>
                    <div class="row row-bottom-padded-md">
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="colorlib-feature animate-box" data-animate-effect="fadeInLeft">
                                        <div class="colorlib-icon">
                                            <i class="flaticon-worker"></i>
                                        </div>
                                        <div class="colorlib-text">
                                            <h3>General Conctructing</h3>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                                        </div>
                                    </div>

                                    <div class="colorlib-feature animate-box" data-animate-effect="fadeInLeft">
                                        <div class="colorlib-icon">
                                            <i class="flaticon-sketch"></i>
                                        </div>
                                        <div class="colorlib-text">
                                            <h3>Pre-Contruction Design</h3>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="colorlib-feature animate-box" data-animate-effect="fadeInLeft">
                                        <div class="colorlib-icon">
                                            <i class="flaticon-engineering"></i>
                                        </div>
                                        <div class="colorlib-text">
                                            <h3>Building &amp; Modeling</h3>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                                        </div>
                                    </div>

                                    <div class="colorlib-feature animate-box" data-animate-effect="fadeInLeft">
                                        <div class="colorlib-icon">
                                            <i class="flaticon-crane"></i>
                                        </div>
                                        <div class="colorlib-text">
                                            <h3>Construction Management</h3>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <RouterLink to="/Service" class="services-wrap animate-box" data-animate-effect="fadeInRight">
                                <div class="services-img" style="background-image: url(services-1.jpg)"></div>
                                <div class="desc">
                                    <h3>Design &amp; Build</h3>
                                </div>
                            </RouterLink>
                        </div>
                        <div class="col-md-4">
                            <RouterLink to="/Service" class="services-wrap animate-box" data-animate-effect="fadeInRight">
                                <div class="services-img" style="background-image: url(services-2.jpg)"></div>
                                <div class="desc">
                                    <h3>House Remodeling</h3>
                                </div>
                            </RouterLink>
                        </div>
                        <div class="col-md-4">
                            <RouterLink to="/Service" class="services-wrap animate-box" data-animate-effect="fadeInRight">
                                <div class="services-img" style="background-image: url(services-3.jpg)"></div>
                                <div class="desc">
                                    <h3>Construction Management</h3>
                                </div>
                            </RouterLink>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <RouterLink to="/Service" class="services-wrap animate-box" data-animate-effect="fadeInRight">
                                <div class="services-img" style="background-image: url(services-4.jpg)"></div>
                                <div class="desc">
                                    <h3>Painting &amp; Tiling</h3>
                                </div>
                            </RouterLink>
                        </div>
                        <div class="col-md-4">
                            <RouterLink to="/Service" class="services-wrap animate-box" data-animate-effect="fadeInRight">
                                <div class="services-img" style="background-image: url(services-5.jpg)"></div>
                                <div class="desc">
                                    <h3>Kitchen Remodeling</h3>
                                </div>
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>

            <div id="get-in-touch" class="colorlib-bg-color">
                <div class="colorlib-narrow-content">
                    <div class="row">
                        <div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                            <h2>Get in Touch!</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                            <p class="colorlib-lead">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <p><RouterLink to="/Contact" class="btn btn-primary btn-learn">Contact me!</RouterLink></p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ServicePage',
    methods: {
        navToggle(){   
            document.getElementById("colorlib-aside").classList.add("active");
        },
        removeDiv(){
            document.getElementById("colorlib-aside").classList.remove("active");
        }
    }
}
</script>