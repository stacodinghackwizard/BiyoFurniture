<template>
    <div>
        
        <a href="#" class="colorlib-nav-toggle" @click="navToggle"><i></i></a>
        <aside id="colorlib-aside" role="complementary" class="border js-fullheight">
            <a class="bg-primary removeDiv" style="padding:10px; position:absolute; top:5px; right:5px; font-size:20px" @click="removeDiv">X</a>
            <h1 id="colorlib-logo"><RouterLink to="/">Biyo <br> Funiture</RouterLink></h1>
            <nav id="colorlib-main-menu" role="navigation">
                <ul>
                    <li class=""><RouterLink to='/'>Home</RouterLink></li> 
                    <li><RouterLink to="/Project">Project</RouterLink> </li>
                    <li><RouterLink to="/About">About</RouterLink></li>
                    <li><RouterLink to="/Service">Services</RouterLink></li>
                    <li class="colorlib-active"><RouterLink to="/Blog">Blog</RouterLink></li>
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

            <div class="colorlib-blog">
                <div class="colorlib-narrow-content">
                    <div class="row">
                        <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                            <span class="heading-meta">Blog</span>
                            <h2 class="colorlib-heading">Read Blog</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                            <div class="blog-entry">
                                <RouterLink to="/About" class="blog-img"><img src="blog-1.jpg" class="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com"></RouterLink>
                                <div class="desc">
                                    <span><small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i class="icon-bubble3"></i> 4</small></span>
                                    <h3><RouterLink to="/About">Renovating National Gallery</RouterLink></h3>
                                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                            <div class="blog-entry">
                                <RouterLink to="/About" class="blog-img"><img src="blog-2.jpg" class="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com"></RouterLink>
                                <div class="desc">
                                    <span><small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i class="icon-bubble3"></i> 4</small></span>
                                    <h3><RouterLink to="/About">Wordpress for a Beginner</RouterLink></h3>
                                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                            <div class="blog-entry">
                                <RouterLink to="/About" class="blog-img"><img src="blog-3.jpg" class="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com"></RouterLink>
                                <div class="desc">
                                    <span><small>April 14, 2018 </small> | <small> Inspiration </small> | <small> <i class="icon-bubble3"></i> 4</small></span>
                                    <h3><RouterLink to="/About">Make website from scratch</RouterLink></h3>
                                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                            <div class="blog-entry">
                                <RouterLink to="/About" class="blog-img"><img src="blog-4.jpg" class="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com"></RouterLink>
                                <div class="desc">
                                    <span><small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i class="icon-bubble3"></i> 4</small></span>
                                    <h3><RouterLink to="/About">Renovating National Gallery</RouterLink></h3>
                                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                            <div class="blog-entry">
                                <RouterLink to="/About" class="blog-img"><img src="blog-5.jpg" class="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com"></RouterLink>
                                <div class="desc">
                                    <span><small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i class="icon-bubble3"></i> 4</small></span>
                                    <h3><RouterLink to="/About">Wordpress for a Beginner</RouterLink></h3>
                                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                            <div class="blog-entry">
                                <RouterLink to="/About" class="blog-img"><img src="blog-6.jpg" class="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com"></RouterLink>
                                <div class="desc">
                                    <span><small>April 14, 2018 </small> | <small> Inspiration </small> | <small> <i class="icon-bubble3"></i> 4</small></span>
                                    <h3><RouterLink to="/About">Make website from scratch</RouterLink></h3>
                                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                            <ul class="pagination">
                                <li class="disabled"><a href="#">&laquo;</a></li>
                                <li class="active"><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">&raquo;</a></li>
                            </ul>
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
    name: 'BlogPage',
    data(){
        return{
            isVisible: false,
        }
    },
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