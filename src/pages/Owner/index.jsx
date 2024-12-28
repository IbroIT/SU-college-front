import React from "react";
import { Box, Typography, Container, Grid, Card, CardMedia, CardContent, useTheme, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import AnimatedScrollComponent from "../../components/AnimatedComponents";
import { motion } from "framer-motion";

export const Owner = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <AnimatedScrollComponent>
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
                   {t("owner.title")}
                 </Typography>
               </motion.div>
             </Box>
        <Container maxWidth="md" sx={{ py: 4, bgcolor: "#f9f9f9", borderRadius: 2, boxShadow: 3 }}>
      
          <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row", mb: 4 }}>
            <CardMedia
              component="img"
              src="https://upload.wikimedia.org/wikipedia/commons/1/1c/%D0%A1%D0%B0%D0%BB%D1%8B%D0%BC%D0%B1%D0%B5%D0%BA%D0%BE%D0%B2_%D0%90%D1%81%D0%BA%D0%B0%D1%80.jpg"
              alt={t("owner.title")}
              sx={{
                width: isMobile ? "100%" : 200,
                height: "auto",
                borderRadius: 2,
                mb: isMobile ? 2 : 0,
                mr: isMobile ? 0 : 2,
              }}
            />
            <Box>
              {[t("owner.bio1"), t("owner.bio2"), t("owner.bio3"), t("owner.bio4")].map((bio, index) => (
                <Typography key={index} variant="body1" paragraph>
                  {bio}
                </Typography>
              ))}
            </Box>
          </Box>

          <Box>
            <Typography variant={isMobile ? "h5" : "h4"} gutterBottom>
              {t("owner.subtitle")}
            </Typography>
            <Grid container spacing={2}>
              {["https://the-tech.kz/wp-content/uploads/2024/06/bc0b6261-scaled.jpg",
                "https://lh3.googleusercontent.com/proxy/bZpdCGo8hHmQoH_GRM4M8PeOC3bnRNQeWVFDSYE-TjXKpTvr3LnUYq3wfjL3bGqvW6CUSPJgu8UYrlgYPGY4_EtuvETW1IJBhb74iRrs-CuveUwDhHsrIv2g",
                "https://salymbekov.com/wp-content/uploads/2021/04/askar-salymbekov-v-vypusknikami-mlk-s.jpg"].map((image, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <Card sx={{ borderRadius: 2 }}>
                    <CardMedia
                      component="img"
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      sx={{ borderRadius: 2 }}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </AnimatedScrollComponent>
    </>
  );
};