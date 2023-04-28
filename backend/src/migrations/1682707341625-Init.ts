import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1682707341625 implements MigrationInterface {
    name = 'Init1682707341625'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "image" ("id" SERIAL NOT NULL, "uuid" character varying NOT NULL, "albumId" integer NOT NULL, "title" character varying NOT NULL, "url" character varying NOT NULL, "thumbnail_url" character varying, CONSTRAINT "PK_d6db1ab4ee9ad9dbe86c64e4cc3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "image"`);
    }

}
