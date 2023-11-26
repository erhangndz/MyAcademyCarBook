using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CarBook.DataAccessLayer.Migrations
{
    public partial class mig_features_15features_Added : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "FeatureName10",
                table: "CarFeatures",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "FeatureName11",
                table: "CarFeatures",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "FeatureName12",
                table: "CarFeatures",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "FeatureName13",
                table: "CarFeatures",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "FeatureName14",
                table: "CarFeatures",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "FeatureName15",
                table: "CarFeatures",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "FeatureName2",
                table: "CarFeatures",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "FeatureName3",
                table: "CarFeatures",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "FeatureName4",
                table: "CarFeatures",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "FeatureName5",
                table: "CarFeatures",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "FeatureName6",
                table: "CarFeatures",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "FeatureName7",
                table: "CarFeatures",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "FeatureName8",
                table: "CarFeatures",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "FeatureName9",
                table: "CarFeatures",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<bool>(
                name: "HasFeature10",
                table: "CarFeatures",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "HasFeature11",
                table: "CarFeatures",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "HasFeature12",
                table: "CarFeatures",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "HasFeature13",
                table: "CarFeatures",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "HasFeature14",
                table: "CarFeatures",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "HasFeature15",
                table: "CarFeatures",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "HasFeature2",
                table: "CarFeatures",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "HasFeature3",
                table: "CarFeatures",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "HasFeature4",
                table: "CarFeatures",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "HasFeature5",
                table: "CarFeatures",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "HasFeature6",
                table: "CarFeatures",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "HasFeature7",
                table: "CarFeatures",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "HasFeature8",
                table: "CarFeatures",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "HasFeature9",
                table: "CarFeatures",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FeatureName10",
                table: "CarFeatures");

            migrationBuilder.DropColumn(
                name: "FeatureName11",
                table: "CarFeatures");

            migrationBuilder.DropColumn(
                name: "FeatureName12",
                table: "CarFeatures");

            migrationBuilder.DropColumn(
                name: "FeatureName13",
                table: "CarFeatures");

            migrationBuilder.DropColumn(
                name: "FeatureName14",
                table: "CarFeatures");

            migrationBuilder.DropColumn(
                name: "FeatureName15",
                table: "CarFeatures");

            migrationBuilder.DropColumn(
                name: "FeatureName2",
                table: "CarFeatures");

            migrationBuilder.DropColumn(
                name: "FeatureName3",
                table: "CarFeatures");

            migrationBuilder.DropColumn(
                name: "FeatureName4",
                table: "CarFeatures");

            migrationBuilder.DropColumn(
                name: "FeatureName5",
                table: "CarFeatures");

            migrationBuilder.DropColumn(
                name: "FeatureName6",
                table: "CarFeatures");

            migrationBuilder.DropColumn(
                name: "FeatureName7",
                table: "CarFeatures");

            migrationBuilder.DropColumn(
                name: "FeatureName8",
                table: "CarFeatures");

            migrationBuilder.DropColumn(
                name: "FeatureName9",
                table: "CarFeatures");

            migrationBuilder.DropColumn(
                name: "HasFeature10",
                table: "CarFeatures");

            migrationBuilder.DropColumn(
                name: "HasFeature11",
                table: "CarFeatures");

            migrationBuilder.DropColumn(
                name: "HasFeature12",
                table: "CarFeatures");

            migrationBuilder.DropColumn(
                name: "HasFeature13",
                table: "CarFeatures");

            migrationBuilder.DropColumn(
                name: "HasFeature14",
                table: "CarFeatures");

            migrationBuilder.DropColumn(
                name: "HasFeature15",
                table: "CarFeatures");

            migrationBuilder.DropColumn(
                name: "HasFeature2",
                table: "CarFeatures");

            migrationBuilder.DropColumn(
                name: "HasFeature3",
                table: "CarFeatures");

            migrationBuilder.DropColumn(
                name: "HasFeature4",
                table: "CarFeatures");

            migrationBuilder.DropColumn(
                name: "HasFeature5",
                table: "CarFeatures");

            migrationBuilder.DropColumn(
                name: "HasFeature6",
                table: "CarFeatures");

            migrationBuilder.DropColumn(
                name: "HasFeature7",
                table: "CarFeatures");

            migrationBuilder.DropColumn(
                name: "HasFeature8",
                table: "CarFeatures");

            migrationBuilder.DropColumn(
                name: "HasFeature9",
                table: "CarFeatures");
        }
    }
}
