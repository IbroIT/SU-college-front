import React from "react";
import { AppBar, Box, Container, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { motion } from "framer-motion";

const resources = [
  {
    title: "KNOX",
    description: "Студенты имеют также доступ к образовательному порталу KNOX, имеющий широкий спектр образовательных и исследовательских баз в области медицины, IT и бизнеса.",
    image: "https://salymbekov.com/wp-content/uploads/2023/02/qip-shot-screen-047-300x172.png", // Пример пути к изображению
  },
  {
    title: "Портал «Research4Life»",
    description: "Портал «Research4Life Всемирной организации здравоохранения, предоставляющий полный доступ к электронным изданиям, журналам и библиотекам по направлению медицина, IT, архитектуры, сельского хозяйства для качественной подготовки специалистов широкого профиля.",
    image: "https://salymbekov.com/wp-content/uploads/2021/02/snimok-300x108.jpg",
  },
  {
    title: "Портал «SAGE Publishing»",
    description: "Портал «SAGE Publishing», который является одним из крупнейших мировых издательств, выпускающий ежемесячно более 1000 журналов, книг по медицинской, гуманитарной и естественно-научной тематике.",
    image: "https://salymbekov.com/wp-content/uploads/2023/02/sage-publishing.png",
  },
  {
    title: "Портал «DeGruyter»",
    description: "Портал «DeGruyter», одно из крупнейших европейских издательств, включающий базу данных из 210 журналов по академическим и гуманитарным наукам.",
    image: "https://salymbekov.com/wp-content/uploads/2023/02/de-gruyter-300x168.png",
  },
  {
    title: "Портал Lincoln University College (LUC)",
    description: "Портал Lincoln University College (LUC), одного из лучших университетов Малайзии, партнерский вуз нашего университета, который предоставил доступ к своим базам данных (книги, журналы, монографии) по ключевым направлениям как медицина, бизнес, IT, здравоохранение.",
    image: "https://salymbekov.com/wp-content/uploads/2022/07/lincoln.jpg",
  },
  {
    title: "Портал «EBSCO Publishing»",
    description: "Портал «EBSCO Publishing», который является крупнейшим поставщиком научных ресурсов ведущих издательств мира, предоставляющий доступ к 15 тематическим базам данных по медицине, IT, бизнесу и менеджменту.",
    image: "https://salymbekov.com/wp-content/uploads/2023/02/qip-shot-screen-046.png",
  },
];

export const Resources = () => {
  return (
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
              Образовательные ресурсы
            </Typography>
          </motion.div>
        </Box>
      </AppBar>
      <Container
  sx={{
    maxWidth: '900px',
    margin: '0 auto',
    padding: '2rem',
    borderRadius: '8px',
  }}
>
  <Typography
    variant="h6"
    component="h2"
    sx={{
      fontWeight: 'bold',
      fontSize: '1rem',
      color: '#333',
      marginBottom: '1rem',
      textAlign: 'justify',
      lineHeight: '1.6',
    }}
  >
    Научная библиотека Салымбеков университет включает в себя полноценные бумажные и электронные ресурсы, каталоги, электронные журналы и базы данных для содействия развития и обеспечения учебно-воспитательных и научно-исследовательских ресурсов для студентов и преподавателей университета путем всех форм и методов библиотечной и информационной деятельности.
    <br />
    <br />
    Научная библиотека является одним из значимых структурных подразделений вуза, ответственная за учебно-воспитательный и научно-исследовательский процессы и имеющие следующие ресурсы:
  </Typography>
</Container>
      <Container sx={{ padding: "20px" }}>
        <Grid container spacing={4}>
          {resources.map((resource, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={resource.image}
                  alt={resource.title}
                />
                <CardContent>
                  <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
                    {resource.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    {resource.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
