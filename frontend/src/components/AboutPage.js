function Choose({para}) {
    return (
        <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium">{para}</span>
            </div>
        </div>
    )
}

function Member({title, desc, link}) {
    return (
        <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">{title}</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">{desc}</p>
            <a href={link} target="_blank" className="mt-1 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    )
}

export default function About() {
    const whyChooseUsTitles = [
        "Intuitive and User-Friendly Interface",
        "Comprehensive Customer Support at Your Service",
        "Robust Data Security and Regulatory Compliance",
        "Flexible and Customizable Payroll Solutions"
    ];

    const team = [
        {
            title: "Sakshi Katale",
            desc: "Backend Developer",
            link: "https://www.linkedin.com/in/sakshi-katale-8986a6302/",
        },
        {
            title: "Prajakta Humbe",
            desc: "Frontend Developer",
            link: "https://www.linkedin.com/in/prajakta-humbe-7126402b7/",
        },
        {
            title: "Maitri More",
            desc: "Frontend Developer",
            link: "",
        },
    ]

    return (
        <section className="text-gray-600 body-font bg-white">
            <div className="container px-5 py-20 mx-auto">
                <h1 className="text-3xl font-medium title-font text-gray-900 text-center mb-10">
                    Pune Institute Of Computer Technology
                </h1>
                <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">MISSION</h2>
                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-1 mb-5"></span>
                    <p className="leading-relaxed text-center">
                        Our mission is to simplify payroll processing for businesses of all sizes. We aim to provide an efficient, accurate, and user-friendly payroll management system that enables organizations to focus on their core operations while ensuring their employees are paid accurately and on time.
                    </p>
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm mt-10">VISION</h2>
                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-1 mb-5"></span>
                    <p className="leading-relaxed">
                        We envision a world where payroll management is hassle-free and transparent. By leveraging technology, we strive to eliminate errors, reduce administrative overhead, and empower businesses to manage their payroll with ease.
                    </p>
                </div>
                <div className="text-center mt-10 mb-5">
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">WHY CHOOSE US?</h2>
                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-1 mb-5"></span>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 px-5">
                    {whyChooseUsTitles.map((choose, index) => (
                        <Choose key={index} para={choose} />
                    ))}
                </div>
                <div className="text-center mt-10">
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">OUR TEAM</h2>
                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-1 mb-5"></span>
                </div>
                <div class="flex flex-wrap -m-4 px-20">
                    {team.map((mem,index) => (
                        <Member key={index} title={mem.title} desc={mem.desc} link={mem.link} />
                    ))}
                </div>
                <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm mt-10">GET STARTED WITH US</h2>
                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-1 mb-5"></span>
                    <p className="leading-relaxed text-center">
                    Ready to simplify your payroll management? Join the growing number of businesses that trust us for their payroll needs. Sign up today for a free trial and experience the benefits of our system firsthand!
                    </p>
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm mt-10">CONTACT US</h2>
                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-1 mb-5"></span>
                    <p className="leading-relaxed text-center">
                    For inquiries or support, please contact us at <span><a href="mailto:sakshikatale@161">@sakshikatale161</a></span> or follow us on our social media channels.
                    </p>
                </div>
            </div>
        </section>
    );
}
