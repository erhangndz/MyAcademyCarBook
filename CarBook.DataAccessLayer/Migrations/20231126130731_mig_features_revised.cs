using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CarBook.DataAccessLayer.Migrations
{
    public partial class mig_features_revised : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "HasFeature",
                table: "CarFeatures",
                newName: "HasFeature1");

            migrationBuilder.RenameColumn(
                name: "FeatureName",
                table: "CarFeatures",
                newName: "FeatureName1");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "HasFeature1",
                table: "CarFeatures",
                newName: "HasFeature");

            migrationBuilder.RenameColumn(
                name: "FeatureName1",
                table: "CarFeatures",
                newName: "FeatureName");
        }
    }
}
