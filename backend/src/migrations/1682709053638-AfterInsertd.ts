import { MigrationInterface, QueryRunner } from "typeorm";

export class AfterInsertd1682709053638 implements MigrationInterface {
    name = 'AfterInsertd1682709053638'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image" ALTER COLUMN "uuid" SET DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image" ALTER COLUMN "uuid" DROP DEFAULT`);
    }

}
