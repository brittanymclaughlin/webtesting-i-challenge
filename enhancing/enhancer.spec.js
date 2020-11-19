const enhancer = require('./enhancer.js');
// test away!

const Item = {
    name: 'Iron Sword',
    durability: 60,
    enhancement: 10,
}



describe('Enhancer', () => {
    //Repair Item test
    describe('repair method', () => {
        it('should take in an object to repair, and output an object with a durability of 100', function () {
            let Weapon = enhancer.repair(Item);

            //expect(Weapon.durability).toBe(2)// -- expect to fail
            expect(Weapon.durability).toBe(100)
        })
    })

    // Item enhancement succeed test
    describe('success method', () => {
        it('should return a new item object with the enhancement increased by 1', () => {
            let EnhancedWeapon = enhancer.success(Item);

            //expect(EnhancedWeapon.enhancement).toBe(15); // -- expect to fail
            expect(EnhancedWeapon.enhancement).toBe(11);
        })
        it('should return the object with the enhancement unchanged', () => {
            let newItem = Item;
            newItem.enhancement = 20;

            let UnenhancedWeapon = enhancer.success(newItem);

            //expect(EnhancedWeapon.enhancement).toBe(15); // -- expect to fail
            expect(UnenhancedWeapon.enhancement).toBe(20);
        })
    })

    //Item Enhancement fail test
    describe('fail method', () => {
        it('should decrease item durabiltiy by 5 if enhancement is less than 15', () => {
            let newItem = Item;
            newItem.enhancement = 14;

            let FailedWeapon = enhancer.fail(newItem);

            //expect(FailedWeapon.durability).toBe(25)// -- expect to fail
            expect(FailedWeapon.durability).toBe(55);
        })
        it('should decrease item durability by 10 if enhancement is greater than or equal to 15', () => {
            let newItem = Item;
            newItem.enhancement = 15;

            let FailedWeapon = enhancer.fail(newItem);

            //expect(FailedArmor.durability).toBe(65); // <-- Expect to fail
            expect(FailedWeapon.durability).toBe(50);

        });
        it('should decrease item enhancement by 1 if enhancement is greater than 16', () => {
            let newItem = Item;
            newItem.enhancement = 18;

            let FailedWeapon = enhancer.fail(newItem);

            //expect(FFailedWeapon.durability).toBe(65); // <-- Expect to fail
            //expect(FailedWeapon.durability).toBe(18); // <-- Expect to fail
            expect(FailedWeapon.enhancement).toBe(17);
            expect(FailedWeapon.durability).toBe(50);

        });
    })
})