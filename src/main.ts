import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as cookieParser from 'cookie-parser'

const start = async () => {
    try {
        const app = await NestFactory.create(AppModule)
        app.use((req, res, next) => {
            const startTime = Date.now();
            res.on('finish', () => {
                const endTime = Date.now();
                const responseTime = endTime - startTime;
                console.log(
                    `${req.method} ${req.originalUrl} ${res.statusCode}, ${responseTime}ms`,
                );
            });
            next();
        })


        const config = new DocumentBuilder() 
        .setTitle('NestJS TEST')
        .setDescription('REST API')
        .setVersion('1.0.0')
        .addTag('NodeJS,NestJS, Postgres, sequalize')
        .build();

        const document = SwaggerModule.createDocument(app,config);
        SwaggerModule.setup('/api/docs',app,document)
        app.use(cookieParser())


        console.log(process.env.PORT);

        const PORT = 9000


        app.listen(PORT, () => {
            console.log(`Server ${PORT}-portda ishga tushdi`);
        });
    } catch (error) {
        console.log(error);
    }



};

start();