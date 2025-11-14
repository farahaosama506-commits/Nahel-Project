const { createApp } = Vue;

createApp({
    data() {
        return {
            isScrolled: false,
            aboutAnimated: false,
            goalsAnimated: false,
            visionAnimated: false,
            programsAnimated: false,
            teamAnimated: false,
            timelineAnimated: false,
            
            // الجدول الزمني التفاعلي
            currentTimelineIndex: 0,
            autoScrollActive: true,
            autoScrollInterval: null,
            
            stats: [
                { id: 1, icon: 'fas fa-users', number: '500', label: 'متطوع' },
                { id: 2, icon: 'fas fa-graduation-cap', number: '1000', label: 'مستفيد' },
                { id: 3, icon: 'fas fa-hand-holding-heart', number: '50', label: 'برنامج' },
                { id: 4, icon: 'fas fa-map-marker-alt', number: '10', label: 'فرع' }
            ],
            
            // الجدول الزمني من 2014 إلى 2025
            timeline: [
                { 
                    year: '2014', 
                    title: 'تأسيس فريق ألوان الشبابي التطوعي', 
                    description: 'بدأت رحلتنا في أواخر عام 2014 بتشكيل فريق ألوان الشبابي التطوعي بمدينة سلمية في محافظة حماة، الذي كان نشطًا في سبعة مجالات: الطفولة، الدعم النفسي، التنمية، المساعدات الإنسانية، الفن والمسرح، الرياضة، والإعلام.' 
                },
                { 
                    year: '2015', 
                    title: 'توسيع نطاق العمل المجتمعي', 
                    description: 'وسعنا نطاق عملنا ليشمل فئات أكثر من المجتمع المستهدف، مع التركيز على الأطفال واليافعين والنساء، وزيادة عدد البرامج والمبادرات.' 
                },
                { 
                    year: '2016', 
                    title: 'تعزيز برامج الدعم النفسي', 
                    description: 'طورنا برامج الدعم النفسي والاجتماعي لتلبية احتياجات المجتمع في ظل الظروف الصعبة، مع التركيز على الفئات الأكثر ضعفاً.' 
                },
                { 
                    year: '2017', 
                    title: 'التركيز على التنمية المستدامة', 
                    description: 'بدأنا في تطوير برامج تركز على التنمية المستدامة وتمكين الشباب، مع إطلاق مبادرات جديدة في مجال التمكين الاقتصادي.' 
                },
                { 
                    year: '2018', 
                    title: 'توسعة المجالات الجغرافية', 
                    description: 'وسعنا نطاق عملنا الجغرافي ليشمل مناطق جديدة، وزدنا عدد المستفيدين من برامجنا بشكل ملحوظ.' 
                },
                { 
                    year: '2019', 
                    title: 'تعزيز الشراكات المحلية', 
                    description: 'عقدنا شراكات استراتيجية مع منظمات محلية لتعزيز تأثيرنا وتبادل الخبرات في مجال العمل المجتمعي والتنموي.' 
                },
                { 
                    year: '2020', 
                    title: 'التكيف مع الجائحة', 
                    description: 'طورنا برامجنا لتتناسب مع التحديات التي فرضتها جائحة كورونا، وانتقلنا إلى تقديم خدماتنا عبر المنصات الرقمية.' 
                },
                { 
                    year: '2021', 
                    title: 'تطوير البرامج الرقمية', 
                    description: 'وسعنا نطاق برامجنا الرقمية لتشمل فئات عمرية أكثر، ووصلنا إلى آلاف المستفيدين عبر منصاتنا الإلكترونية.' 
                },
                { 
                    year: '2022', 
                    title: 'التحضير للتأسيس الرسمي', 
                    description: 'بدأنا التحضير لتأسيس مؤسسة نحل بشكل رسمي، وإعداد الأوراق والوثائق اللازمة للتسجيل القانوني.' 
                },
                { 
                    year: '2023', 
                    title: 'استكمال متطلبات التأسيس', 
                    description: 'استكملنا جميع المتطلبات القانونية والإجرائية لتأسيس المؤسسة، وقدمنا طلب التسجيل الرسمي.' 
                },
                { 
                    year: '2024', 
                    title: 'التأسيس الرسمي لمؤسسة نحل', 
                    description: 'تم تأسيس مؤسسة نحل بشكل رسمي في 2 نيسان 2024 بموجب القرار رقم 776 من وزارة الشؤون الاجتماعية والعمل في سوريا.' 
                },
                { 
                    year: '2025', 
                    title: 'انطلاق البرامج تحت المظلة القانونية', 
                    description: 'انطلقت جميع برامجنا وأنشطتنا تحت المظلة القانونية لمؤسسة نحل، مع خطط للتوسع وزيادة التأثير.' 
                }
            ],
            
            goals: [
                { id: 1, icon: 'fas fa-user-shield', title: 'التمكين', description: 'توفير الإمكانات والمقدرات للشباب واليافعين لتحويل أفكارهم إلى مشاريع مستدامة' },
                { id: 2, icon: 'fas fa-hands-helping', title: 'المساندة والحماية', description: 'دعم البيئة المحيطة بالشباب وتحسين الظروف الاجتماعية والثقافية والاقتصادية' },
                { id: 3, icon: 'fas fa-book', title: 'مجتمع المعرفة', description: 'المساهمة في بناء الناتج الثقافي المحلي وتوفير المصادر الثقافية الآمنة' },
                { id: 4, icon: 'fas fa-leaf', title: 'الاستدامة البيئية', description: 'تعزيز الوعي البيئي ودعم المبادرات التي تهدف إلى الحفاظ على البيئة والموارد الطبيعية' },
                { id: 5, icon: 'fas fa-chart-line', title: 'التمكين الاقتصادي', description: 'تعزيز التمكين الاقتصادي والاجتماعي للفئات الأكثر ضعفًا من خلال فرص التوظيف والتدريب' },
                { id: 6, icon: 'fas fa-heart', title: 'المساهمة المجتمعية', description: 'رفع مستوى الفئات الهشة في الصحة والتعليم والتمكين الاقتصادي والتنمية' }
            ],
            
            futureTimeline: [
                { year: '2024', text: 'إطلاق برامج التمكين الاقتصادي والتدريب المهني' },
                { year: '2025', text: 'توسيع نطاق العمل ليشمل محافظات إضافية' },
                { year: '2026', text: 'إنشاء مراكز متخصصة للتدريب وتمكين الشباب' }
            ],
            
            programs: [
                { id: 1, icon: 'fas fa-user-graduate', title: 'برامج التمكين', description: 'برامج تهدف إلى تمكين الشباب واليافعين وتحويل أفكارهم إلى مشاريع مستدامة' },
                { id: 2, icon: 'fas fa-shield-alt', title: 'الحماية والدعم', description: 'توفير المساحات الآمنة والدعم النفسي والاجتماعي للشباب' },
                { id: 3, icon: 'fas fa-book-reader', title: 'الإثراء الثقافي', description: 'برامج ثقافية ومعرفية تهدف إلى بناء مجتمع المعرفة' },
                { id: 4, icon: 'fas fa-seedling', title: 'الاستدامة البيئية', description: 'مبادرات وبرامج للحفاظ على البيئة والموارد الطبيعية' },
                { id: 5, icon: 'fas fa-briefcase', title: 'التدريب المهني', description: 'برامج التدريب والتأهيل المهني لتمكين الشباب اقتصادياً' },
                { id: 6, icon: 'fas fa-hands', title: 'المساعدة المجتمعية', description: 'برامج دعم الفئات الهشة في المجالات الصحية والتعليمية والاجتماعية' }
            ],
            
            team: [
                { id: 1, name: 'مهند شاويش', position: 'رئيس مجلس الأمناء', social: [
                    { platform: 'phone', icon: 'fas fa-phone', link: 'tel:+963992857090' }
                ]},
                { id: 2, name: 'علي عرعور', position: 'مدير تنفيذي - قائد فريق ألوان', social: [
                    { platform: 'phone', icon: 'fas fa-phone', link: 'tel:+963934598683' }
                ]}
            ],
            
            contactInfo: [
                { type: 'email', icon: 'fas fa-envelope', title: 'البريد الإلكتروني', value: 'Nahal.fdn@gmail.com' },
                { type: 'phone', icon: 'fas fa-phone', title: 'هاتف رئيس مجلس الأمناء', value: '+963 992 857 090' },
                { type: 'phone', icon: 'fas fa-phone', title: 'هاتف المدير التنفيذي', value: '+963 934 598 683' }
            ],
            
            form: {
                name: '',
                email: '',
                message: ''
            },
            
            footerLinks: [
                { text: 'الخصوصية', href: '#' },
                { text: 'الشروط', href: '#' },
                { text: 'عن المؤسسة', href: '#' },
                { text: 'اتصل بنا', href: '#' }
            ],
            
            socialLinks: [
                { platform: 'facebook', icon: 'fab fa-facebook-f', link: '#' },
                { platform: 'twitter', icon: 'fab fa-twitter', link: '#' },
                { platform: 'instagram', icon: 'fab fa-instagram', link: '#' },
                { platform: 'linkedin', icon: 'fab fa-linkedin-in', link: '#' }
            ]
        }
    },
    
    computed: {
        timelineProgress() {
            return (this.currentTimelineIndex / (this.timeline.length - 1)) * 100;
        },
        currentTimelineItem() {
            return this.timeline[this.currentTimelineIndex];
        }
    },
    
    mounted() {
        // التحكم في ظهور العناصر عند التمرير
        window.addEventListener('scroll', this.handleScroll);
        this.handleScroll();
        
        // بدء السكرول التلقائي للجدول الزمني
        this.startAutoScroll();
    },
    
    methods: {
        handleScroll() {
            // التحكم في شريط التنقل
            this.isScrolled = window.scrollY > 50;
            
            // التحكم في ظهور الأقسام
            const aboutSection = document.getElementById('about');
            const goalsSection = document.getElementById('goals');
            const visionSection = document.getElementById('vision');
            const programsSection = document.getElementById('programs');
            const teamSection = document.getElementById('teams');
            
            if (aboutSection) {
                const aboutPosition = aboutSection.getBoundingClientRect();
                this.aboutAnimated = aboutPosition.top < window.innerHeight - 100;
            }
            
            if (goalsSection) {
                const goalsPosition = goalsSection.getBoundingClientRect();
                this.goalsAnimated = goalsPosition.top < window.innerHeight - 100;
            }
            
            if (visionSection) {
                const visionPosition = visionSection.getBoundingClientRect();
                this.visionAnimated = visionPosition.top < window.innerHeight - 100;
            }
            
            if (programsSection) {
                const programsPosition = programsSection.getBoundingClientRect();
                this.programsAnimated = programsPosition.top < window.innerHeight - 100;
            }
            
            if (teamSection) {
                const teamPosition = teamSection.getBoundingClientRect();
                this.teamAnimated = teamPosition.top < window.innerHeight - 100;
            }
        },
        
        smoothScroll(event) {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
            
            // إغلاق القائمة على الأجهزة المحمولة
            if (window.innerWidth <= 768) {
                document.querySelector('.nav-menu').classList.remove('active');
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    menu.classList.remove('active');
                });
            }
        },
        
        toggleMenu() {
            const menu = document.querySelector('.nav-menu');
            menu.classList.toggle('active');
        },
        
        toggleDropdown(event) {
            if (window.innerWidth > 768) {
                event.preventDefault();
                const dropdown = event.target.closest('.dropdown');
                const menu = dropdown.querySelector('.dropdown-menu');
                menu.classList.toggle('active');
            }
        },
        
        getHexagonStyle(index) {
            const size = 60;
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            const delay = Math.random() * 6;
            
            return {
                top: `${top}%`,
                left: `${left}%`,
                width: `${size}px`,
                height: `${size * 1.15}px`,
                animationDelay: `${delay}s`
            };
        },
        
        // طرق الجدول الزمني
        setTimelineIndex(index) {
            this.currentTimelineIndex = index;
        },
        
        nextTimeline() {
            if (this.currentTimelineIndex < this.timeline.length - 1) {
                this.currentTimelineIndex++;
            }
        },
        
        prevTimeline() {
            if (this.currentTimelineIndex > 0) {
                this.currentTimelineIndex--;
            }
        },
        
        toggleAutoScroll() {
            if (this.autoScrollActive) {
                this.stopAutoScroll();
            } else {
                this.startAutoScroll();
            }
        },
        
        startAutoScroll() {
            if (this.autoScrollActive) return;
            
            this.autoScrollActive = true;
            this.autoScrollInterval = setInterval(() => {
                if (this.currentTimelineIndex < this.timeline.length - 1) {
                    this.currentTimelineIndex++;
                } else {
                    this.currentTimelineIndex = 0;
                }
            }, 3000); // التبديل كل 3 ثواني
        },
        
        stopAutoScroll() {
            this.autoScrollActive = false;
            if (this.autoScrollInterval) {
                clearInterval(this.autoScrollInterval);
                this.autoScrollInterval = null;
            }
        },
        
        submitForm() {
            // محاكاة إرسال النموذج
            alert('شكراً لتواصلك معنا! سنرد عليك في أقرب وقت ممكن.');
            this.form.name = '';
            this.form.email = '';
            this.form.message = '';
        }
    },
    
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        this.stopAutoScroll();
    }
}).mount('#app');