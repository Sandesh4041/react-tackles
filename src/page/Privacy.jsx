import React from 'react'
import Nav from '../component/Nav'
import Footer from '../component/Footer'

const Privacy = () => {
  return (
    <div>
      <Nav/>
      <div className='w-[90%] nine:w-[85%] mx-auto pt-[2rem]'>
        <div>
        <h1 className='font-bold text-3xl text-primary'>Privacy Policy for Tackles</h1>
        <p className='text-gray-500 mt-[10px]'>At Tackles, accessible from tackles.ae, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Tackles and how we use it.</p>
        <p className='text-gray-500 mt-[10px]'>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>        
        </div>

        <div className='pt-[1rem]'>
        <h1 className='font-bold text-3xl text-primary'>Log Files</h1>
        <p  className='text-gray-500 mt-[10px]'>Tackles follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>
        </div>

        <div className='pt-[1rem]'>
        <h1 className='font-bold text-3xl text-primary'>Cookies and Web Beacons</h1>
        <p  className='text-gray-500 mt-[10px]'>Like any other website, Tackles uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>
        </div>

        <div className='pt-[1rem]'>
        <h1 className='font-bold text-3xl text-primary'>Google DoubleClick DART Cookie</h1>
        <p  className='text-gray-500 mt-[10px]'>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL. </p>
        </div>

        <div className='pt-[1rem]'>
        <h1 className='font-bold text-3xl text-primary'>Privacy Policies</h1>
        <p  className='text-gray-500 mt-[10px]'>You may consult this list to find the Privacy Policy for each of the advertising partners of Tackles.</p>
        <p className='text-gray-500 mt-[10px]'>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Tackles, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
        <p className='text-gray-500 mt-[10px]'>Note that Tackles has no access to or control over these cookies that are used by third-party advertisers.</p>
        </div>

        <div className='pt-[1rem]'>
                    <h1  className='font-bold text-3xl text-primary'>Third Party Privacy Policies</h1>
                    <p  className='text-gray-500 mt-[10px]'>Tackles's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.</p>
                    <p className='text-gray-500 mt-[10px]'>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?</p>
                    
                </div>
                <div className='pt-[1rem]'>
                    <h1 className='font-bold text-3xl text-primary'>Children's Information</h1>
                    <p className='text-gray-500 mt-[10px]'>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
                    <p className='text-gray-500 mt-[10px]'>Tackles does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
                    
                </div>
                <div className='pt-[1rem]'>
                    <h1  className='font-bold text-3xl text-primary'>Online Privacy Policy Only</h1>
                    <p className='text-gray-500 mt-[10px]'>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Tackles. This policy is not applicable to any information collected offline or via channels other than this website.</p>
                    
                </div>
                <div className='pt-[1rem]'>
                    <h1  className='font-bold text-3xl text-primary'>Consent</h1>
                    <p className='text-gray-500 mt-[10px]'>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
                    
                </div>

      </div>

      <div className='mt-[20px]'>
        <Footer/>
      </div>
    </div>
  )
}

export default Privacy
