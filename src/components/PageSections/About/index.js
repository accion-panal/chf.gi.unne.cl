import React, { Fragment } from 'react';
// import About from './components/About';
import Section from '../../Section/Section';
import MeetingForm from '../../../components/Form/MeetingForm';
import aboutMeImg from '../../../assets/img/me/mePhoto.jpeg'


const AboutComponent = () => {
  return (
    <Section>
    {/* <Fade delay={300} direction="right"> */}
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-1 my-10 mt-16 mb-10">
      <div className="col-span-1 md:col-span-1 xl:col-span-2 flex flex-col justify-center xl:ml-6">
        <h2 className="text-5xl xl:text-4xl text-center xl:text-start  text-primary font-bold uppercase">
            Sobre mí
          </h2>
        <div className='grid grid-cols-1 xl:grid-cols-2'>
          <div className="col-span-2 xl:col-span-1 flex justify-center flex-col">
            <img
              src={aboutMeImg}
              alt="about-img"
              className="object-cover object-top rounded-full shadow-lg h-[280px] w-[280px] mt-10 mx-20 md:mx-2 md:w-[300px] md:h-[300px] xl:w-[350px] xl:h-[350px] xl:my-10 xl:mx-20 hover:scale-110 duration-300"
            />
          </div>
          <div className="col-span-2 xl:col-span-1 ">
            <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-1 xl:text-left">               
              Arquitecta con especialización en asesoría inmobiliaria, 
              tasación y corretaje de propiedades. Mi compromiso es ofrecerte un servicio completo y personalizado, 
              caracterizado por una comunicación constante y efectiva. Mi experiencia en arquitectura y mi profundo 
              conocimiento del mercado me permiten ofrecerte evaluaciones precisas, asesoramiento cercano y resultados 
              satisfactorios en cada transacción. Confía en mí para hacer realidad tus objetivos inmobiliarios con eficacia y profesionalismo.
              <br />
              <br />
              Con un enfoque centrado en el cliente y años de experiencia en el campo inmobiliario, 
              estoy aquí para guiarte en cada paso del proceso. Desde la evaluación inicial hasta el cierre de la transacción, 
              puedes contar con mi compromiso de proporcionarte un servicio de calidad y resultados exitosos. 
              Permíteme ser tu aliada en el mundo inmobiliario y transformar tus metas en realidades tangibles y efectivas.
            </p>
            <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-1 md:text-center xl:text-left">
              Paula Charnay Díaz.
            </p>
            <p className="text-xl xl:text-xl text-gray-700 ml-0 xl:ml-1 md:text-center xl:text-left">
              Fundadora de Charnay Gestión Inmobiliaria .
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* </Fade>  */}
  </Section>
  );
};

export default AboutComponent;
