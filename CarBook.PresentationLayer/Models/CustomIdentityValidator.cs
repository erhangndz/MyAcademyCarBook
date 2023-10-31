using Microsoft.AspNetCore.Identity;

namespace CarBook.PresentationLayer.Models
{
    public class CustomIdentityValidator : IdentityErrorDescriber
    {



        public override IdentityError PasswordRequiresDigit()
        {
            return new IdentityError
            {
                Description = "Lütfen en az 1 tane rakam yazın (1-9)"
            };


        }


        public override IdentityError PasswordRequiresLower()
        {
            return new IdentityError
            {
                Description = "Lütfen en az bir küçük harf yazın (a-z)"
            };
        }

        public override IdentityError PasswordRequiresNonAlphanumeric()
        {
            return new IdentityError
            {
                Description = "Lütfen en az bir simge yazın (.!/+...)"
            };
        }


        public override IdentityError PasswordRequiresUpper()
        {
            return new IdentityError
            {
                Description = "Lütfen en az bir büyük harf yazın (A-Z)"
            };
        }


        public override IdentityError PasswordTooShort(int length)
        {
            return new IdentityError
            {
                Description = "Şifre en az 6 karakter içermelidir."
            };
        }

        


    }
}

