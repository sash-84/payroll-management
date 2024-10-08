import image from '../assets/hero-image.jpg';
import Footer from './Footer';

export default function Home() {
    return (
<>
<section className="text-gray-600 body-font bg-white">
  <div className="container mx-auto flex px-20 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src={image} />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Streamline Your Payroll Management</h1>
      <p className="mb-8 leading-relaxed">Effortlessly manage employee salaries, deductions, and benefits with our comprehensive payroll management system ans experience enhanced reporting capabilities and reduce administrative burdens.</p>
      <div className="flex w-full md:justify-start justify-center items-end">
        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
          <label for="hero-field" className="leading-7 text-sm text-gray-600">Contact</label>
          <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get in Touch</button>
      </div>
      <p className="text-sm mt-2 text-gray-500 mb-8 w-full">Need assistance? Let us know!</p>
      
    </div>
  </div>
</section>
<Footer />
</>
    );
}
