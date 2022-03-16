describe("BlackJack Game", ()=>{
    describe("dealerShouldDraw Function", ()=>{

        const case1 = [
            {suit: 'hearts', val: 10, displayVal: '10'},
            {suit: 'hearts', val: 9, displayVal: '9'},

        ]

        const case2 = [
            {suit: 'hearts', val: 11, displayVal: 'Ace'},
            {suit: 'hearts', val: 6, displayVal: '6'},

        ]

        const case3 = [
            {suit: 'hearts', val: 11, displayVal: 'Ace'},
            {suit: 'hearts', val: 6, displayVal: '6'},
            {suit: 'hearts', val: 10, displayVal: '10'},

        ]

        const case4 = [
            {suit: 'hearts', val: 2, displayVal: '2'},
            {suit: 'hearts', val: 4, displayVal: '4'},
            {suit: 'spades', val: 2, displayVal: '2'},
            {suit: 'hearts', val: 5, displayVal: '5'},

        ]



        it("should return false with 10, 9", ()=>{

            const result = dealerShouldDraw(case1)

            expect(result).toEqual(false)

        })

        it("should return true with Ace, 6", ()=>{

            const result = dealerShouldDraw(case2)

            expect(result).toEqual(true)

        })

        it("should return false with 10, 6, Ace", ()=>{

            const result = dealerShouldDraw(case3)

            expect(result).toEqual(false)

        })

        it("should return true with 2, 4, 2, 5", ()=>{

            const result = dealerShouldDraw(case4)

            expect(result).toEqual(true)

        })





    })
})