import React from 'react';

const About = () => {
  return (
    <section className="relative  flex lg:flex-row flex-col sm:max-w-5xl mx-auto sm:p-16 pb-6 !pt-[126px] px-5 min-h-[calc(100vh-80px)]">
       <div className="flex-1  flex  rounded-xl  flex-col">
      <h1 className="text-base text-[#25204b] text-right sm:text-3xl ml-auto font-bold border-b-2 pb-1 border-[#25204b] w-fit  mb-10 font-[Cairo]">
        لماذا الحج فريضة؟ وما هي خطواته وفوائده؟
      </h1>

      <div className="space-y-10 text-right font-[Cairo]">
        {/* سبب فرض الحج */}
        <div className=" bg-purple-500/10 backdrop-blur-md  rounded-xl p-6 shadow-lg">
        <h2 className="text-base sm:text-2xl font-semibold w-fit ml-auto border-b-2 pb-1 text-[#25204b]  border-[#25204b]  mb-4">
           لماذا الحج فريضة؟
        </h2>
          <p className=" text-sm sm:text-lg leading-loose">
            الحج أحد أركان الإسلام الخمسة، قال رسول الله ﷺ: <br />
            <span className="italic font-bold text-[#25204b]">"بُنِي الإسلامُ على خمسٍ... وحجِّ البيتِ"</span> (رواه البخاري ومسلم). <br />
            وهو فريضة على كل مسلم قادر مرة واحدة في العمر.
          </p>
        </div>

        {/* خطوات الحج */}
        <div className="bg-purple-500/10 backdrop-blur-md  rounded-xl p-6 shadow-lg">
         
          <h2 className="text-lg sm:text-2xl font-semibold w-fit ml-auto border-b-2 pb-1 text-[#25204b]  border-[#25204b]  mb-4">
          خطوات أداء الحج 
        </h2>
          <ul className="space-y-2  text-sm sm:text-lg">
            <li>الإحرام من الميقات</li>
            <li>الطواف حول الكعبة</li>
            <li>السعي بين الصفا والمروة</li>
            <li>الوقوف بعرفة</li>
            <li>المبيت في مزدلفة</li>
            <li>رمي الجمرات</li>
            <li>ذبح الهدي</li>
            <li>الحلق أو التقصير</li>
            <li>طواف الإفاضة</li>
            <li>المبيت في منى</li>
            <li>طواف الوداع</li>
          </ul>
        </div>

        {/* فوائد الحج */}
        <div className="bg-purple-500/10 backdrop-blur-md  rounded-xl p-6 shadow-lg">
          <h2 className="text-lg sm:text-2xl font-semibold w-fit ml-auto  border-b-2 pb-1 text-[#25204b]  border-[#25204b]  mb-4">
            فوائد الحج  
        </h2>
          <p className=" text-sm sm:text-lg leading-loose">
            قال النبي ﷺ: <span className="italic font-bold text-[#25204b]">"مَن حج هذا البيت فلم يرفث ولم يفسق رجع كيوم ولدته أمه"</span> (رواه البخاري). <br />
            فالحج يُطهّر النفس، ويغفر الذنوب، ويوحد المسلمين من كل أنحاء العالم.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;

