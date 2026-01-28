// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
const teamImages = import.meta.glob('../assets/images/team/*.{png,jpg,jpeg,svg}', { eager: true, as: 'url' });

const getTeamImage = (imageName) => {
    // Try to find the image in the imported object
    const path = `../assets/images/team/${imageName}`;
    return teamImages[path] || null;
};

const teamData = [
    { name: "Bharath N K", role: "Chairperson", image: "bharath_nk.png", linkedin: "#" },
    { name: "Induja V", role: "Vice Chairperson", image: "induja_v.jpg", linkedin: "https://www.linkedin.com/in/induja-v-593783346" },
    { name: "Sharni K", role: "Vice Chairperson", image: "sharni_k.jpg", linkedin: "https://www.linkedin.com/in/sharni-k-b27396259" },
    { name: "Mukesh G E", role: "Join Secretary", image: "mukesh_ge.jpg", linkedin: "https://www.linkedin.com/in/mukesh-g-e-42196a32a/" },
    { name: "Sahana Varsini S", role: "Additional Secretary", image: "sahana_varsini_s.jpg", linkedin: "https://www.linkedin.com/in/sahana-varsini-s-s-616048292/" },
    { name: "Abhinaya P S", role: "Treasurer", image: "abhinaya_ps.jpg", linkedin: "https://www.linkedin.com/in/abhinaya-shrinivasan-a2b015243" },
    { name: "Naveen S", role: "Additional Treasurer", image: "naveen_s.jpg", linkedin: "https://www.linkedin.com/in/naveen-sivakumar-09742a371" },
    { name: "Dharshini P", role: "Media Head", image: "dharshini_p.jpg", linkedin: "https://www.linkedin.com/in/dharshinip20" },
    { name: "Harini G", role: "Document Head", image: "harini_updated.jpg", linkedin: "https://www.linkedin.com/in/harini-ganesan-abb8a72a8/" },
    { name: "Kabilan A", role: "Document Head", image: "kabilan_a.jpg", linkedin: "https://www.linkedin.com/in/kabilan-a-76924a259" },
    { name: "Sanjay T S", role: "Document Head", image: "sanjay_ts.jpg", linkedin: "https://www.linkedin.com/in/sanjay-t-s" },
    { name: "DivyaSri U", role: "Event Mgmt Head", image: "divyasri_u.jpg", linkedin: "#" },
    { name: "Rithanya S", role: "Event Mgmt Head", image: "rithanya_s_updated.jpg", linkedin: "https://www.linkedin.com/in/rithanya-s-a7338b259" },
    { name: "Krithik R", role: "Event Mgmt Head", image: "krithik_r_updated.jpg", linkedin: "https://www.linkedin.com/in/kiruthick-r-%E2%9A%A1-803291293/" },
    { name: "Tamilarasi P", role: "Executive Head", image: "tamilarasi_p.jpg", linkedin: "https://www.linkedin.com/in/tamilarasi-palanivel/" },
    { name: "Sathyaa S", role: "Executive Head", image: "sathyaa_s.jpg", linkedin: "https://www.linkedin.com/in/sathyaa-selvaraju" },
    { name: "KavyaSri V", role: "Executive Head", image: "kavyasri_v.jpg", linkedin: "https://www.linkedin.com/in/kaviya-sri-v-388247259" },
    { name: "Jestin A", role: "Media Team", image: "jestin_a_updated.jpg", linkedin: "https://www.linkedin.com/in/jestin-a-/" },
    { name: "GuruPrasath S B", role: "Media Team", image: "guruprasath_sb.jpg", linkedin: "https://in.linkedin.com/in/guruprasath-s-b-932383326" },
    { name: "Praveen Kumar M", role: "Media Team", image: "praveen_kumar_m.jpg", linkedin: "https://www.linkedin.com/in/praveen-kumar-24a551359" },
    { name: "Kishore R S", role: "Event Mgmt Team", image: "kishore_rs.jpg", linkedin: "#" },
    { name: "Sudha M", role: "Event Mgmt Team", image: "sudha_m.jpg", objectPosition: 'top', linkedin: "https://www.linkedin.com/in/sudha-murugesan-a42458380" },
    { name: "ASVITHA.R.M.", role: "Event Mgmt Team", image: "asvitha_rm.jpg", linkedin: "https://www.linkedin.com/in/asvitha-ramesh-58866236a" },
    { name: "Atchaya A", role: "Document Team", image: "atchaya_a.jpg", linkedin: "https://www.linkedin.com/in/atchaya-a-1468a42b7/" },
    { name: "Sudheeksha S", role: "Document Team", image: "sudheeksha_s.jpg", linkedin: "https://www.linkedin.com/in/sudheeksha-senthilkumar-64b571259" },
    { name: "Harini M", role: "Document Team", image: "harini_m.jpg", linkedin: "https://www.linkedin.com/in/harini-m-b806a0348" },
    { name: "Rubiga D", role: "Document Team", image: "rubiga_d.jpg", linkedin: "https://www.linkedin.com/in/rubiga-d-29a39a327" },
    { name: "Jagadeesh S K", role: "Executive Team", image: "jagadeesh_sk.jpg", linkedin: "https://www.linkedin.com/in/jagadeesh-s-k-589509380" },
    { name: "BHARAT HARI S", role: "Executive Team", image: "bharat_hari_s.jpg", linkedin: "https://www.linkedin.com/in/bharat-hari-s-b940b5327" },
    { name: "UDHAYANITHI S", role: "Executive Team", image: "udhayanithi_s.jpg", linkedin: "https://www.linkedin.com/in/udhayanithi-s-1b0556332/" },
];

const Team = () => {
    return (
        <section id="team" className="team-section py-5">
            <div className="container py-5">
                <div className="section-header text-center mb-5 reveal">
                    <h2 className="display-5 fw-bold text-white">Our Team</h2>
                    <p className="text-secondary">The dedicated individuals behind our chapter.</p>
                </div>


                {/* Swiper Implementation */}
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                        slideShadows: true,
                    }}
                    pagination={{ clickable: true }}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="teamSwiper reveal"
                >
                    {teamData.map((member, index) => (
                        <SwiperSlide className="team-slide" key={index}>
                            <div className="team-image-container">
                                <img
                                    src={getTeamImage(member.image) || 'https://via.placeholder.com/300x420?text=No+Image'}
                                    alt={member.name}
                                    style={{ objectPosition: member.objectPosition || 'center' }}
                                />
                            </div>
                            <div className="team-overlay">
                                <h3>{member.name}</h3>
                                <span>{member.role}</span>
                                <div className="team-socials-reveal">
                                    <a href={member.linkedin || "#"} target="_blank" rel="noopener noreferrer" className="team-icon"><i className='bx bxl-linkedin'></i></a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Team;
