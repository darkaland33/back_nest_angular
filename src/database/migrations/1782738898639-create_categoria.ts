import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCategoria1782738898639 implements MigrationInterface {
    name = 'CreateCategoria1782738898639'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categoria" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "categoria" ADD "nombre" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categoria" DROP COLUMN "detalle"`);
        await queryRunner.query(`ALTER TABLE "categoria" ADD "detalle" character varying(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categoria" DROP COLUMN "detalle"`);
        await queryRunner.query(`ALTER TABLE "categoria" ADD "detalle" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categoria" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "categoria" ADD "nombre" character varying NOT NULL`);
    }

}
