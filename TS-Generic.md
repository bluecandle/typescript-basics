# Generic
뭐... 사실 TS 에서만 등장하는 개념이 아니라, 이미 처음에 Java 배울때 배웠던 개념이지만, 복습합시다

<a href = "https://www.typescriptlang.org/docs/handbook/generics.html">Link</a>

In languages like C# and Java, one of the main tools in the toolbox for creating reusable components is generics, that is, being able to create a component that can work over a variety of types rather than a single one. This allows users to consume these components and use their own types.

    function identity<T>(arg: T): T {
        return arg;
    }

We’ve now added a type variable T to the identity function. This T allows us to capture the type the user provides (e.g. number), so that we can use that information later. Here, we use T again as the return type. On inspection, we can now see the same type is used for the argument and the return type. This allows us to traffic that type information in one side of the function and out the other.

The second way is also perhaps the most common. Here we use type argument inference – that is, we want the compiler to set the value of T for us automatically based on the type of the argument we pass in:

    let output = identity("myString");  // type of output will be 'string'

Notice that we didn’t have to explicitly pass the type in the angle brackets (<>); <b>the compiler just looked at the value "myString", and set T to its tsype.</b> While type argument inference can be a helpful tool to keep code shorter and more readable, you may need to explicitly pass in the type arguments as we did in the previous example when the compiler fails to infer the type, as may happen in more complex examples.

### length member 함부로 사용하지 않기

What if we want to also log the length of the argument arg to the console with each call? We might be tempted to write this:

    function loggingIdentity<T>(arg: T): T {
        console.log(arg.length);  // Error: T doesn't have .length
        return arg;
    }

When we do, the compiler will give us an error that we’re using the .length member of arg, but nowhere have we said that arg has this member. Remember, we said earlier that these type variables stand in for any and all types, so someone using this function could have passed in a number instead, which does not have a .length member.
=> 대신 T[] 이런식으로 T type의 array를 받기로 지정되어있으면, length member 를 사용해도 되겠지! 어떤 type 이 안에 들어오는지는 모르겠지만, 어쨌든 array 가 안에 들어온다는거니까.


# Generic Classes
A generic class has a similar shape to a generic interface. Generic classes have a generic type parameter list in angle brackets (<>) following the name of the class.

    class GenericNumber<T> {
        zeroValue: T;
        add: (x: T, y: T) => T;
    }

    let myGenericNumber = new GenericNumber<number>();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function(x, y) { return x + y; };

# 특정 속성(ex. length)을 가진 type 만을 사용하겠다는 설정을 하려면?
Instead of working with any and all types, we’d like to constrain this function to work with any and all types that also have the .length property. As long as the type has this member, we’ll allow it, but it’s required to have at least this member. To do so, we must list our requirement as a constraint on what T can be.

To do so, we’ll create an interface that describes our constraint. <b>Here, we’ll create an interface that has a single .length property and then we’ll use this interface and the extends keyword to denote our constraint:</b>

    interface Lengthwise {
        length: number;
    }

    function loggingIdentity<T extends Lengthwise>(arg: T): T {
        console.log(arg.length);  // Now we know it has a .length property, so no more error
        return arg;
    }


# Advanced Usage

A more advanced example uses the prototype property to infer and constrain relationships between the constructor function and the instance side of class types.

    class BeeKeeper {
        hasMask: boolean;
    }

    class ZooKeeper {
        nametag: string;
    }

    class Animal {
        numLegs: number;
    }

    class Bee extends Animal {
        keeper: BeeKeeper;
    }

    class Lion extends Animal {
        keeper: ZooKeeper;
    }

    function createInstance<A extends Animal>(c: new () => A): A {
        return new c();
    }

    createInstance(Lion).keeper.nametag;  // typechecks!
    createInstance(Bee).keeper.hasMask;   // typechecks!

