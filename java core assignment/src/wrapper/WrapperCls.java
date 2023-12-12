package wrapper;
class WrapperCls {
    public static void main(String[] args)
    {
        byte a = 1;
        Byte byteobj = new Byte(a);
        int b = 16;
        Integer intobj = new Integer(b);
        float c = 20.6f;
        Float floatobj = new Float(c);
        double d = 500.5;
        Double doubleobj = new Double(d);
        char e = 'b';
        Character charobj = e;

        System.out.println("Wrapped objects");
        System.out.println("Byte object: " + byteobj);
        System.out.println("Integer object: " + intobj);
        System.out.println("Float object: " + floatobj);
        System.out.println("Double object: " + doubleobj);
        System.out.println("Character object: " + charobj);

       //unwrapping objects
        byte bv = byteobj;
        int iv = intobj;
        float fv = floatobj;
        double dv = doubleobj;
        char cv = charobj;

        System.out.println("\nUnwrapped values");
        System.out.println("byte value: " + bv);
        System.out.println("int value: " + iv);
        System.out.println("float value: " + fv);
        System.out.println("double value: " + dv);
        System.out.println("char value: " + cv);
    }
}

