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
                    <li><RouterLink to="/Service">Services</RouterLink></li>
                    <li><RouterLink to="/Blog">Blog</RouterLink></li>
                    <li class="colorlib-active"><RouterLink to="/Contact">Contact</RouterLink></li>
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
    <div id="colorlib-main">

        <div class="colorlib-contact">
            <div class="colorlib-narrow-content">
                <div class="row">
                    <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                        <span class="heading-meta">Read</span>
                        <h2 class="colorlib-heading">Get in Touch</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-5">
                        <div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                            <div class="colorlib-icon">
                                <i class="icon-globe-outline"></i>
                            </div>
                            <div class="colorlib-text">
                                <p><a href="#">sulaimontaofeek76@gmail.com</a></p>
                            </div>
                        </div>

                        <div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                            <div class="colorlib-icon">
                                <i class="icon-map"></i>
                            </div>
                            <div class="colorlib-text">
                                <p>Ojuri, Ijagun Road, Ijebu Ode, Ogun State, Nigeria</p>
                            </div>
                        </div>

                        <div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                            <div class="colorlib-icon">
                                <i class="icon-phone"></i>
                            </div>
                            <div class="colorlib-text">
                                <p><a href="tel://">+234 8147635160</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7 col-md-push-1">
                        <div class="row">
                            <div class="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInLeft">
                                <form action="">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Name">
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Email">
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Subject">
                                    </div>
                                    <div class="form-group">
                                        <textarea name="" id="message" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <input type="submit" class="btn btn-primary btn-send-message" value="Send Message">
                                    </div>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--<div id="map"></div>	-->

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
                        <p><a href="#" class="btn btn-primary btn-learn">Contact me!</a></p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactPage',
    data(){
        return{
            
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