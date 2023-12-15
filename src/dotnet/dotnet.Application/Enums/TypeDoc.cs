namespace dotnet.Application.Enums;

public enum TypeDoc
{
    CPF = 1,
    RG,
    OUTRO
}

public static class TypeDocExtensions
{
    
    public static string TypeDocMask(this TypeDoc typeDoc)
    {
        switch (typeDoc)
        {
            case TypeDoc.CPF:
                return @"^\d{3}\.\d{3}\.\d{3}-\d{2}$";
            case TypeDoc.RG:
                return @"^\d{2}\.\d{3}\.\d{3}-\d{1}$";
            case TypeDoc.OUTRO:
                return ".*";
            default:
                throw new ArgumentException("Não foi encontrado um tipo de documento cujo valor seja: " + (int)typeDoc);
        }
    }
}

