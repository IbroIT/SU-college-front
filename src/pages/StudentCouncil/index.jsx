import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import AnimatedScrollComponent from "../../components/AnimatedComponents";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Grid, Card, CardMedia, CardContent } from "@mui/material";
import Adulov from '../../components/images/IMG_5148.jpg';
import Ailin from '../../components/images/ailon.jpg';
import Beka from '../../components/images/beka.jpg';
import Daniel from '../../components/images/daniel.jpg';
import Kazak from '../../components/images/kazak.jpg';
import Sancho from '../../components/images/sancho.jpg';
import Vlad from '../../components/images/IMG_5023.jpg';
import Aziret from '../../components/images/aziret.jpg';
import Kamila from '../../components/images/kamilaphoto.jpg';
import Raiana from '../../components/images/photo_2025-01-21_12-37-03.jpg';
import Nurda from '../../components/images/nurda.jpg'
import { useRef } from 'react';
import styles from './Carousel.module.scss';
import photo1 from '../../components/images/photo1.jpg'
import photo2 from '../../components/images/photo2.jpg'
import photo3 from '../../components/images/photo3.jpg'
import photo4 from '../../components/images/photo4.jpg'
import photo5 from '../../components/images/photo5.jpg'
import photo6 from '../../components/images/photo6.jpg'

import stud1 from '../../components/images/stud1.jpg'
import stud2 from '../../components/images/stud2.jpg'
import stud3 from '../../components/images/stud3.jpg'
import stud4 from '../../components/images/stud4.jpg'
import stud5 from '../../components/images/stud5.jpg'
import stud6 from '../../components/images/stud6.jpg'
import stud7 from '../../components/images/stud7.jpg'
import stud8 from '../../components/images/stud8.jpg'
import stud9 from '../../components/images/stud9.jpg'
import stud10 from '../../components/images/stud10.jpg'
import stud11 from '../../components/images/stud11.jpg'
import stud12 from '../../components/images/stud12.jpg'
import stud13 from '../../components/images/stud13.jpg'
import stud14 from '../../components/images/stud14.jpg'
import stud15 from '../../components/images/stud15.JPG'

export const StudentCouncil = () => {
  const { t } = useTranslation();
  const students = [
    {
      name: 'Vlad Zubov',
      position: 'Curator',
      photo: Vlad,
      description: 'Vlad is responsible for overseeing the entire council, ensuring smooth operations and coordinating activities.'
    },
    {
      name: "Ailin Omurakunova",
      position: "President",
      photo: Ailin,
      description: 'Ailin leads the council, representing the students and ensuring the implementation of their needs and requests.'
    },
    {
      name: "Kamila Baekeeva",
      position: "Vice President",
      photo: Kamila,
      description: 'Kamila assists the President and takes over leadership in their absence.'
    },
    {
      name: "Daniel Sattarzhanov",
      position: "Parliament\'s Adviser",
      photo: Daniel,
      description: 'Daniel provides strategic advice to the parliament members and ensures effective governance.'
    },
    {
      name: "Raiana",
      position: "Secretary",
      photo: Raiana,
      description: 'Raiana manages all administrative tasks and ensures proper documentation for the council.'
    },
    {
      name: 'Aziret Dzhumabekov',
      position: 'Minister of Technology and IT',
      photo: Aziret,
      description: 'Aziret manages all technological needs of the council and oversees IT infrastructure.'
    },
    {
      name: "Arsen Adylov",
      position: "Minister of Finance and Volunteering",
      photo: Adulov,
      description: 'Arsen handles financial matters and coordinates volunteering activities for the council.'
    },
    {
      name: "Bekmurza Shamilov",
      position: "Minister of Sport",
      photo: Beka,
      description: 'Bekmurza is in charge of promoting sports and organizing events for students.'
    },
    {
      name: "Sanzhar Kazubekov",
      position: "Minister of Culture",
      photo: Sancho,
      description: 'Sanzhar develops programs related to student culture and ensures their successful implementation.'
    },
    {
      name: "Nurdaylet Kyzdarbekov",
      position: "Minister of Education",
      photo: Nurda,
      description: "Minister of Education"
    }
  ];

  const photos = [
  { src: photo1, alt: 'Photo 1', size: 'large' },
  { src: photo2, alt: 'Photo 2', size: 'small' },
  { src: photo4, alt: 'Photo 4', size: 'large' },
  { src: photo5, alt: 'Photo 5', size: 'small' },
  { src: photo6, alt: 'Photo 6', size: 'large' },
  { src: stud1, alt: 'Photo 6', size: 'small' },

];
const carouselRef = useRef(null);

    const scrollLeft = () => {
        const carousel = carouselRef.current;
        const scrollAmount = 300; 
        carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    };

    const scrollRight = () => {
        const carousel = carouselRef.current;
        const scrollAmount = 300;
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };


  return (
    <>
    <>
      <AppBar position="static">
        <Box
          sx={{
            backgroundColor: "#5a738f",
            padding: { xs: "60px 20px", sm: "90px" },
            textAlign: "center",
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                color: "#fff",
                fontWeight: "bold",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                fontSize: { xs: "1.8rem", sm: "2.5rem" },
              }}
            >
              {t("student_council.title")}
            </Typography>
          </motion.div>
        </Box>
      </AppBar>
      {/* Council Members Section */}
      <Container sx={{ marginTop: '35px' }}>
        <Grid container spacing={4} justifyContent="center">
          {students.map((student, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    maxWidth: 345,
                    textAlign: "center",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    transition: "box-shadow 0.3s ease",
                    '&:hover': {
                      boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={student.photo}
                    alt={student.name}
                    sx={{
                      borderRadius: "50%",
                      width: "180px",
                      height: "180px",
                      margin: "16px auto",
                      // filter: "grayscale(100%)",
                      transition: "filter 0.3s ease, transform 0.3s ease",
                      '&:hover': {
                        // filter: "grayscale(0%)",
                        transform: "scale(1.1)",
                      },
                    }}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {student.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {student.position}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                      {student.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
      <div className={styles.carouselContainer}>
            <button className={styles.scrollButton} onClick={scrollLeft}>←</button>
            <div className={styles.imagesSection} ref={carouselRef}>
                <img src={stud2} alt="Example 1" />
                <img src={stud3} alt="Example 3" />
                <img src={stud4}></img>               
                <img src={stud5}></img>  
                <img src={stud6}></img>  
                <img src={stud7}></img>  
                <img src={stud8}></img>  
                <img src={stud9}/>
                <img src={stud10}></img>  
                <img src={stud11}></img>  
                <img src={stud12}></img>  
                <img src={stud13}></img>  
                <img src={stud14}></img>  
                <img src={stud15}></img>  

            </div>
            <button className={styles.scrollButton} onClick={scrollRight}>→</button>
        </div>
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: '700' }}>
          {t("student_council.about_title")}
        </Typography>
        <Typography paragraph>
          {t("student_council.about_paragraph")}
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ textAlign: 'center' }}>
          {t("student_council.goals_title")}
        </Typography>
        <Typography paragraph sx={{ fontWeight: '700' }}>
          {t("student_council.goals_paragraph")}
        </Typography>
        <Typography component="ul">
          <li style={{ listStyleType: 'inherit' }}>
            {t("student_council.goal_1")}
          </li>
          <li style={{ listStyleType: 'inherit' }}>
            {t("student_council.goal_2")}
          </li>
          <li style={{ listStyleType: 'inherit' }}>
            {t("student_council.goal_3")}
          </li>
        </Typography>
        <br />
        <Typography variant="h7" gutterBottom sx={{ fontWeight: '700', marginTop: '15px' }}>
          {t("student_council.tasks_title")}
        </Typography>
        <Typography component="ul">
          <li style={{ listStyleType: 'inherit' }}>
            {t("student_council.task_1")}
          </li>
          <li style={{ listStyleType: 'inherit' }}>
            {t("student_council.task_2")}
          </li>
          <li style={{ listStyleType: 'inherit' }}>
            {t("student_council.task_3")}
          </li>
          <li style={{ listStyleType: 'inherit' }}>
            {t("student_council.task_4")}
          </li>
          <li style={{ listStyleType: 'inherit' }}>
            {t("student_council.task_5")}
          </li>
          <li style={{ listStyleType: 'inherit' }}>
            {t("student_council.task_6")}
          </li>
          <li style={{ listStyleType: 'inherit' }}>
            {t("student_council.task_7")}
          </li>
          <li style={{ listStyleType: 'inherit' }}>
            {t("student_council.task_8")}
          </li>
          <li style={{ listStyleType: 'inherit' }}>
            {t("student_council.task_9")}
          </li>
        </Typography>
        <Box sx={{ mt: 4 }}>
  {[ 
    "ОБЩИЕ ПОЛОЖЕНИЯ", 
    "ОСНОВНЫЕ ЦЕЛИ И ЗАДАЧИ СТУДЕНЧЕСКОГО САМОУПРАВЛЕНИЯ", 
    "ПРАВА И ОБЯЗАННОСТИ СТУДЕНЧЕСКОГО СОВЕТА", 
    "ПРАВА И ОБЯЗАННОСТИ ЧЛЕНОВ СТУДЕНЧЕСКОГО САМОУПРАВЛЕНИЯ", 
    "СТРУКТУРА И ПОРЯДОК ФОРМИРОВАНИЯ СТУДЕНЧЕСКОГО СОВЕТА", 
    "ЗАКЛЮЧИТЕЛЬНЫЕ ПОЛОЖЕНИЯ"
  ].map((title, index) => (
    <Accordion key={index}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${index}-content`}
        id={`panel${index}-header`}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        {title === "ОБЩИЕ ПОЛОЖЕНИЯ" && (
            <>
              1.1. Студенческий Совет Учреждения «Салымбеков Университет» (далее Университет) является постоянно действующим органом самоуправления студентов. 
              <br /><br />
              1.2. В своей работе Студенческий Совет руководствуется принципами демократии, добровольности, равноправия и законности и действует в соответствии с законодательством Кыргызской Республики, Уставом Учреждения «Салымбеков Университет» и настоящим Положением.
              <br /><br />
              1.3. Все студенты Учреждения «Салымбеков Университет» имеют право избирать и быть избранным в состав Студенческого Совета и участвовать в его деятельности.
              <br /><br />
              1.4. Студенческий Совет взаимодействует с администрацией и структурными подразделениями Университета.
              <br /><br />
              Решения Студенческого Совета распространяются на всех студентов Университета.
            </>
          )}
          {title === "ОСНОВНЫЕ ЦЕЛИ И ЗАДАЧИ СТУДЕНЧЕСКОГО САМОУПРАВЛЕНИЯ" && (
          <>
          2.1. Целью Студенческого Совета является создание условий:
        <br></br>  –  для оптимизации процесса профессионального образования студентов Университета;

<br></br>–  для всестороннего развития личности студента, обладающей физическим и нравственно-психологическим здоровьем;

<br></br>–   для обеспечения реализации прав студентов на участие в управлении образовательным процессом, решения важных вопросов жизнедеятельности студенческой молодежи.
<br></br>
2.2. Задачами Студенческого Совета являются:

<br></br>– привлечение студентов к решению всех вопросов, связанных с подготовкой высококвалифицированных специалистов;

<br></br>– разработка предложений по повышению качества образовательного процесса с учетом научных и профессиональных интересов студентов;
<br></br>–  защита и представление прав и интересов студентов;
<br></br>– содействие в решении образовательных, социально-бытовых и прочих вопросов, затрагивающих интересы Университета;
<br></br>–   содействие органам управления Университета в решении образовательных и научных задач, в организации досуга и быта студентов, в пропаганде здорового образа жизни;
<br></br>–  содействие структурным подразделениям Университета в проводимых ими мероприятиях в рамках образовательного процесса;
<br></br>–    проведение работы, направленной на повышение сознательности студентов и ихтребовательности к уровню своих знаний, воспитание бережного отношения к имущественному комплексу, патриотическое отношение к духу и традициям колледжа;
<br></br>– информирование студентов о деятельности Университета;
<br></br>– содействие реализации общественно значимых молодежных инициатив.
<br></br>
<br></br>2.3. Деятельность Студенческого Совета может быть направлена и на решение других задач, определяемых с учетом специфики Учреждения «Салымбеков Университет».
          </>)}
          {title === "ПРАВА И ОБЯЗАННОСТИ СТУДЕНЧЕСКОГО СОВЕТА" && (
            <>
3.1   Студенческий Совет имеет право:

 

<br></br>– участвовать в разработке и совершенствовании нормативных актов, затрагивающих интересы студентов;
<br></br>– участвовать в оценке качества образовательного процесса, готовить и вносить предложения в органы управления Университета по его оптимизации с учетом научных и профессиональных интересов студенчества;
<br></br>– участвовать внесении корректировок расписания учебных занятий, графика проведения зачетов, экзаменов, организации практик студентов, организации быта и отдыха студентов;
<br></br>– участвовать в решении социально-бытовых и финансовых вопросов, затрагивающих интересы студентов, в том числе распределении дотаций и средств, выделяемых на культурно-массовые и спортивно-оздоровительные мероприятия, отдых;
<br></br>– участвовать в рассмотрении вопросов, связанных с нарушениями студентами учебной дисциплины и правил внутреннего распорядка Университета;
<br></br>– участвовать в разработке и реализации поощрений студентов за достижения в разных сферах учебной деятельности, в том числе принимающих активное участие в деятельности Студенческого Совета и общественной жизни Университета;
<br></br>– рассматривать и участвовать в разбирательстве заявлений и жалоб студентов Университета;
<br></br>– пользоваться в установленном порядке информацией, имеющейся в распоряжении органов управления Университета;
<br></br>– в случаях нарушения и ограничения прав и свобод студентов, а так же прав Студенческого Совета вносить предложения в органы управления Университета о принятии мер по восстановлению нарушенных прав и применению мер дисциплинарного воздействия к виновным лицам;
<br></br>
<br></br>
<br></br>3.2.  Студенческий Совет обязан:
<br></br>
<br></br> 
<br></br>– проводить работу, направленную на повышение сознательности студентов и их требовательности к уровню своих знаний, воспитание бережного отношения к имущественному комплексу Университета;
<br></br>– проводить работу, направленную на укрепление учебной дисциплины и правопорядка в учебных корпусах, повышение гражданского самосознания студентов, воспитание чувства долга и ответственности;
<br></br>– проводить работу со студентами по выполнению устава и правил внутреннего распорядка Университета;
<br></br>– содействовать органам управления Университета в вопросах организации образовательной деятельности;
<br></br>– своевременно и в установленном порядке рассматривать все заявления и обращения студентов, поступающие в Студенческий Совет;
<br></br>– проводить работу в соответствии с Положением и планом деятельности Студенческого Совета на учебный год;
<br></br>–  содействовать созданию условий для учебы и отдыха студентов;
<br></br>– представлять и защищать интересы студентов перед органами управления Университета, государственными органами, общественными объединениями, иными организациями и учреждениями;
<br></br>– информировать органы управления Университета соответствующего уровня о своей деятельности.
            </>
          )}
          {title === "ПРАВА И ОБЯЗАННОСТИ ЧЛЕНОВ СТУДЕНЧЕСКОГО САМОУПРАВЛЕНИЯ" && (
            <>
            4.1. Член Студенческого Совета имеет право и обязан активно участвовать в его деятельности, направленной на выполнение задач Студенческого Совета.
<br></br>
<br></br>4.2. Член Студенческого Совета обязан выполнять его решения.
<br></br>
<br></br>4.3. Член Студенческого Совета имеет право на получение информации о деятельности Студенческого Совета.
<br></br>
<br></br>4.4. В случае невыполнения своих обязанностей член Студенческого Совета может быть исключен из состава Студенческого Совета простым большинством голосов.
<br></br>
<br></br>4.5. Обязанности исключенного члена Студенческого Совета возлагаются на члена соответствующего сектора Студенческого Совета.
            </>
          )}
          {title === "СТРУКТУРА И ПОРЯДОК ФОРМИРОВАНИЯ СТУДЕНЧЕСКОГО СОВЕТА" && (
            <>
            5.1. Решение о создании Студенческого совета принимает собрание студентов Университета, на котором также могут заслушиваться и утверждаться отчеты Студенческого совета, определяться приоритетные направления деятельности студенческого совета, решаться вопрос о досрочном приостановлении полномочий Студенческого совета.
<br></br>
<br></br>5.2. Собрание студентов Универистета может решать иные вопросы, связанные с деятельностью Студенческого совета.
<br></br>
<br></br>5.3. Решения по вопросам, вынесенным на собрание студентов, принимаются простым большинством голосов присутствующих студентов.
<br></br>
<br></br>5.4.  Структуру Студенческого совета образуют:
<br></br>
<br></br>1. Председатель студенческого совета Университета, заместитель председателя и пресс-секретарь, которые избираются собранием студентов сроком на один год.
<br></br>
<br></br>2. Совет старост Университета (решение вопросов, касающихся учебно-воспитательного процесса, непосредственно в учебной группе, а также содействие учебному отделу Университета в решении учебно-организационных задач). Состав совета определяется администрацией Университета из числа лучших и активных студентов.
<br></br>
<br></br>3. Студенческий совет во главе с председателем по мере необходимости могут создавать секторы, отвечающие за благотворительное, культурно-массовое, спортивное, учебное, научное и другое направление Совета.
            </>
          )}
          {title === "ЗАКЛЮЧИТЕЛЬНЫЕ ПОЛОЖЕНИЯ" && (
            <>
6.1. Положение вступает в силу после его одобрения Ученым Советом и утверждения ректором Университета.
<br></br>
<br></br>6.2. Непосредственным куратором Студенческого Совета является заведующий студенческим отделом кадров Университета.
<br></br>
<br></br>6.3.  Состав Студенческого Совета утверждается ректором Университета и Студенческий Совет ежегодно отчитывается о своей деятельности перед студентами Университета и ежемесячно на заседаниях учебно-методического Совета.
<br></br>
<br></br>6.4. Приостановка деятельности Студенческого Совета может быть осуществлена по решению администрацией Университета в случае грубого однократного нарушения Студенческим Совета законодательства КР, Правил внутреннего распорядка Учреждения «Салымбеков Университет» и данного Положения.
            </>
          )}
        </Typography>
      </AccordionDetails>
    </Accordion>
  ))}
</Box>
      </Container>
      </>
    </>
  );
};

export default StudentCouncil;
