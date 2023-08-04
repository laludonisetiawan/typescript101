describe('type data array', function():void {
    it('harusnya sama dengan javascript', function () :void {
        const names: string[] = ["doni", "setiawan", "akhir"];
        const values: number[] = [1, 2, 3];

        console.info(names);
        console.info(values);
    });

    it('harusnya mendukung Readonly',function () {
        const hobbies: ReadonlyArray<string> = ["membaca", "menulis"];
        console.info(hobbies);

        console.info(hobbies[0]);
        console.info(hobbies[1]);
    });

    it('harusnya mendukung tuple', function (){
        const person: readonly [string, string, number] = ["lalu", "doni", 1];
        console.info(person);
    });
})