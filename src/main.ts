import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('Nest js')
    .setDescription('Test project with nest.js and Postgres')
    .setVersion('1.0.0')
    .addTag('ikustow')
    .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs',app,document)

  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
}

start()