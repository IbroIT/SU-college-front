import React from "react";
import { AppBar, Box, Container, Typography, Divider } from "@mui/material";
import { motion } from "framer-motion";

export const Scholarships = () => {
  return (
    <>
      <AppBar position="static">
        <Box
          sx={{
            backgroundColor: "#5a738f",
            padding: { xs: "60px 20px", sm: "90px" },
            textAlign: "center",
            boxShadow: "none",
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
                fontSize: { xs: "2.5rem", sm: "3rem" },
              }}
            >
              Стипендии и льготы
            </Typography>
          </motion.div>
        </Box>
      </AppBar>

      <Container sx={{ padding: "40px 20px", maxWidth: "lg" }}>
        <Typography
          variant="h4"
          sx={{
            marginBottom: "20px",
            fontWeight: "bold",
            color: "#333",
            fontSize: { xs: "1.6rem", sm: "2rem" },
          }}
        >
          Льготная политика
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginBottom: "20px",
            lineHeight: 1.8,
            fontSize: { xs: "1rem", sm: "1.1rem" },
            color: "#333",
          }}
        >
          Социальная поддержка студентов университета представляет собой
          предоставление льгот студентам в виде снижения стоимости оплаты за
          обучение на сумму, выраженную в процентном соотношении к установленной
          стоимости обучения. Льготы по социальной поддержке могут быть
          предоставлены в виде: бесплатное проживание в общежитии, льготное
          питание и др. Льготы могут быть предоставлены в виде исключений в
          других особых случаях при наличии веских оснований, которые комиссией
          посчитаются достаточными.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginBottom: "20px",
            lineHeight: 1.8,
            fontSize: { xs: "1rem", sm: "1.1rem" },
            color: "#333",
          }}
        >
          Непременным условием социальной поддержки студентов является отличная
          и хорошая успеваемость, учебная дисциплина и активное участие в
          научно-исследовательской, культурно-массовой, спортивной и общественной
          работе Университета. Право на получение льготы имеют студенты
          Университета очной формы обучения, имеющие по результатам предыдущего
          учебного года только отличные оценки по всем дисциплинам, а также не
          имеющие академической задолженности.
        </Typography>

        <Typography
          variant="h5"
          sx={{
            marginBottom: "20px",
            fontWeight: "bold",
            color: "#5a738f",
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
          }}
        >
          Категории студентов для получения льгот
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginBottom: "20px",
            fontSize: { xs: "1rem", sm: "1.1rem" },
            lineHeight: 1.8,
            color: "#333",
          }}
        >
          <strong>I категория:</strong> Студенты очной формы обучения, закончившие
          учебный год по всем дисциплинам только на «отлично».
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginBottom: "20px",
            fontSize: { xs: "1rem", sm: "1.1rem" },
            lineHeight: 1.8,
            color: "#333",
          }}
        >
          <strong>II категория:</strong> Студенты, потерявшие кормильца, круглые
          сироты, инвалиды I и II группы.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginBottom: "20px",
            fontSize: { xs: "1rem", sm: "1.1rem" },
            lineHeight: 1.8,
            color: "#333",
          }}
        >
          <strong>III категория:</strong> Студенты, родители которых являются
          штатными сотрудниками Университета, внесших значительный вклад в
          повышение качества подготовки специалистов, научно-исследовательской
          работе, а также принимающих активное участие в общественной жизни
          университета.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginBottom: "20px",
            fontSize: { xs: "1rem", sm: "1.1rem" },
            lineHeight: 1.8,
            color: "#333",
          }}
        >
          <strong>IV категория:</strong> Студенты, регулярно представляющие
          Университет на соревнованиях и конкурсах республиканского, межрегионального
          и международного уровня.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginBottom: "20px",
            fontSize: { xs: "1rem", sm: "1.1rem" },
            lineHeight: 1.8,
            color: "#333",
          }}
        >
          <strong>V категория:</strong> Студенты, поступающие на первый курс и
          особо отличившиеся в процессе обучения в школах, средних профессиональных
          учебных заведениях и в различных образовательных, спортивных и культурных
          соревнованиях республиканского и международного уровня.
        </Typography>

        <Typography
          variant="h5"
          sx={{
            marginBottom: "20px",
            fontWeight: "bold",
            color: "#5a738f",
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
          }}
        >
          Состав комиссии по социальной поддержке студентов Международного
          факультета медицины «Салымбеков Университет»
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginBottom: "20px",
            fontSize: { xs: "1rem", sm: "1.1rem" },
            lineHeight: 1.8,
            color: "#333",
          }}
        >
          Уметалиева М.Н. – декан, председатель комиссии.
          <br />
          Арзиева Н.Н. – заместитель декана, член комиссии.
          <br />
          Акматова А.Т. – заведующая УМО, член комиссии.
          <br />
          Шерали уулу Ж. – экономист, член комиссии.
          <br />
          Бопушева А.Т. – заведующая СОК, член комиссии.
          <br />
          Пиримбаева Ж.Ж. – руководитель департамента HR и делопроизводства, член комиссии.
          <br />
          Алиярова М.Ю. – преподаватель кафедры ЕГД, старший куратор, член комиссии.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginBottom: "40px",
            fontSize: { xs: "1rem", sm: "1.1rem" },
            lineHeight: 1.8,
            color: "#333",
          }}
        >
          Основание: решение ученого совета от 30 августа 2022 года.
        </Typography>
      </Container>
    </>
  );
};
