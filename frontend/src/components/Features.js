export default function Features () {
    return (
        <section class="text-gray-600 body-font bg-white">
             <div class="container px-5 py-24 mx-auto">
               <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                 <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                     <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                     <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                 </div>
                 <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Automated Payroll Calculations</h2>
                    <p class="leading-relaxed text-base">Our system automatically calculates employee salaries, deductions, and taxes based on predefined rules, ensuring accurate and timely payroll processing. This feature significantly reduces manual errors and saves valuable time for HR teams.</p>
                 </div>
               </div>
               <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                 <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Employee Self-Service Portal</h2>
                    <p class="leading-relaxed text-base">The self-service portal allows employees to access their payslips, update personal information, and submit leave requests all in one place. This not only enhances transparency but also reduces administrative burdens on HR staff.</p>
                 </div>
                 <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                     <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                     <circle cx="6" cy="6" r="3"></circle>
                     <circle cx="6" cy="18" r="3"></circle>
                     <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12">              </path>
                    </svg>
                 </div>
               </div>
               <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
                 <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                     <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                     <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2">              </path>
                     <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                 </div>
                 <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                     <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Robust Reporting and Analytics</h2>
                     <p class="leading-relaxed text-base"> Generate comprehensive payroll reports that provide insights into payroll expenses, tax liabilities, and employee compensation trends. This feature aids in effective budgeting and financial planning, helping businesses make informed decisions.</p>
                     
                 </div>
               </div>
             </div>
</section>
    )
}