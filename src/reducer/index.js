const init = {
    showed: {
        guardian: {
            none: true,
            show: false,
            hide: false,
            full: false
        },
        seeker: {
            none: true,
            show: false,
            hide: false,
            full: false
        },
        survivor: {
            none: true,
            show: false,
            hide: false,
            full: false
        },
        mystic: {
            none: true,
            show: false,
            hide: false,
            full: false
        },
        rogue: {
            none: true,
            show: false,
            hide: false,
            full: false
        },
        all: {
            none: true,
            show: false,
            hide: false,
            full: false
        }
    },
    investigators:[
        {
            name: "All",
            stringCode: "all-all",
            faction: "all",
            isSelected: true
        },
        {
            name: "All",
            stringCode: "all-guardian",
            faction: "guardian",
            isSelected: true
        },
        {
            name: "All",
            stringCode: "all-seeker",
            faction: "seeker",
            isSelected: true
        },
        {
            name: "All",
            stringCode: "all-rogue",
            faction: "rogue",
            isSelected: true
        },
        {
            name: "All",
            stringCode: "all-mystic",
            faction: "mystic",
            isSelected: true
        },
        {
            name: "All",
            stringCode: "all-survivor",
            faction: "survivor",
            isSelected: true
        },
        {
            name: "All",
            stringCode: "all-neutral",
            faction: "neutral",
            isSelected: true
        },
        {
            name: "Roland Banks",
            stringCode: "roland",
            faction: "guardian",
            isSelected: true
        },
        {
            name: "Daisy Walker",
            stringCode: "daisy",
            faction: "seeker",
            isSelected: true
        },        {
            name: "Skids O'Toole",
            stringCode: "skids",
            faction: "rogue",
            isSelected: true
        },        {
            name: "Agnes Baker",
            stringCode: "agnes",
            faction: "mystic",
            isSelected: true
        },        {
            name: "Wendy Adams",
            stringCode: "wendy",
            faction: "survivor",
            isSelected: true
        },        {
            name: "Zoey Samaras",
            stringCode: "zoey",
            faction: "guardian",
            isSelected: true
        },        {
            name: "Rex Murphy",
            stringCode: "rex",
            faction: "seeker",
            isSelected: true
        },        {
            name: "Jenny Barnes",
            stringCode: "jenny",
            faction: "rogue",
            isSelected: true
        },        {
            name: "Jim Culver",
            stringCode: "jim",
            faction: "mystic",
            isSelected: true
        },        {
            name: '"Ashcan" Pete',
            stringCode: "ashcan",
            faction: "survivor",
            isSelected: true
        },
    ],
    factions: [
        {
            name: "All",
            stringCode: 'all'
        },
        {
            name: "Guardian",
            stringCode: 'guardian'
        },
        {
            name: "Seeker",
            stringCode: 'seeker'
        },
        {
            name: "Rogue",
            stringCode: 'rogue'
        },
        {
            name: "Mystic",
            stringCode: 'mystic'
        },
        {
            name: "Survivor",
            stringCode: 'survivor'
        },
    ],
    cycles: [
        {
            name: "Core",
            stringCode: 'core'
        },
        {
            name: "The Dunwich Legacy",
            stringCode: 'dunwich'
        },
        {
            name: "The Path to Carcosa",
            stringCode: 'carcosa'
        },
        {
            name: "The Forgotten Age",
            stringCode: 'fage'
        },
        {
            name: "The Circle Undone",
            stringCode: 'circle'
        },
        {
            name: "The Dream-Eaters",
            stringCode: 'dreameaters'
        },
        {
            name: "The Innsmouth Conspiracy",
            stringCode: 'innsmouth'
        },      
    ],
    cycleChoices: [
        {
            name: "Any",
            promptString: "No restrictions",
            stringCode: 'any',
            clicked: true,
        },
        {
            name: "Required",
            promptString: "...",
            stringCode: 'required',
            clicked: false,
        },
        {
            name: "Only",
            promptString: "...",
            stringCode: 'only',
            clicked: false,
        },
    ],
    cycleCutter: {
        show: false,
        hide: false,
    },
    comparators: [
        {
            name: 'XP',
            stringCode: 'xp',
            values: [0, 0],
            chosen: ['any', 'any'],
            choices: [ ['any', 'more', 'more or equals', 'equals', 'less or equals', 'less'], []],
            open: [false, false],
            add: null
        },
        {
            name: 'Likes',
            stringCode: 'likes', 
            values: [0, 0],
            chosen: ['any', 'any'],
            open: [false, false],
            choices: [ ['any', 'more', 'more or equals', 'equals', 'less or equals', 'less'], []],
            add: null
        },
        {
            name: 'Favorites',
            stringCode: 'favorites',
            values: [0, 0],
            chosen: ['any', 'any'],
            open: [false, false],
            choices: [ ['any', 'more', 'more or equals', 'equals', 'less or equals', 'less'], []],
            add: null
        }
    ]
}

const isAny = (prop, obj) =>{
    let isAny = false
                        
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {

            isAny = obj[key][prop]? true: false
            if(isAny)
                break

        } 
    }
    return isAny
}

const isAll = (prop, obj) =>{
    let isAll = true
                        
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {

            isAll = obj[key][prop]? true: false
            if(!isAll)
                break

        } 
    }
    return isAll
}

const reducer = (state = init, {type, payload})=>{
    switch(type){
        case 'SET_SHOWED': 
            console.log('SET_SHOWED_REDUCER', payload)

            let newShowed = {...state.showed}
            for (const key in state.showed) {

                //save

                if (state.showed.hasOwnProperty(key)) {

                    if(payload.faction===key){

                        let isAnyHide = isAny('hide', state.showed)
                        let isAllNone = isAll('none', state.showed)

                        if(state.showed[key].none || state.showed[key].hide){

                            if(isAnyHide || isAllNone){
                                newShowed[key] = {
                                    none: false,
                                    show: true,
                                    hide: false,
                                    full: false
                                } 
                            } else{
                                newShowed[key] = {
                                    none: false,
                                    show: false,
                                    hide: false,
                                    full: true
                                } 
                            }
                        } else if(state.showed[key].show || state.showed[key].full){
                            newShowed[key] = {
                                none: false,
                                show: false,
                                hide: true,
                                full: false
                            } 
                        }

                    } else {
                        newShowed[key] = {
                            none: true,
                            show: false,
                            hide: false,
                            full: false
                        }
                    }
                }
            }

            console.log(newShowed)

            return {
                ...state,
                showed: newShowed,
            }

        case 'INVESTIGATOR_CLICKED':
            const investigatorIdx = state.investigators.findIndex(investigator=>investigator.stringCode === payload.code)
            const newInvestigators = [
                ...state.investigators.slice(0, investigatorIdx),
                {
                    ...state.investigators[investigatorIdx],
                    isSelected: !state.investigators[investigatorIdx].isSelected,
                },
                ...state.investigators.slice(investigatorIdx+1)
            ]
            return {
                ...state,
                investigators: newInvestigators
            }

        case 'CYCLE_CHOICE_CLICKED':

            const newCycleChoices = state.cycleChoices.map(cycleChoice=>{
                return({
                    ...cycleChoice,
                    clicked: cycleChoice.stringCode===payload.stringCode? true: false
                })
            })

            let newCycleCutter = {}

            if(['required', 'only'].includes(payload.stringCode)){
                if(state.cycleCutter.show){
                    newCycleCutter = {...state.cycleCutter}
                } else{
                    newCycleCutter = {
                        show: true,
                        hide: false
                    }
                }
            } else{
                if(!state.cycleCutter.show){
                    newCycleCutter = {...state.cycleCutter}
                } else{
                    newCycleCutter = {
                        show: false,
                        hide: true
                    }
                }
            }

            return {
                ...state,
                cycleChoices: newCycleChoices,
                cycleCutter: newCycleCutter
            }

        case 'SET_COMPARATOR_CHOICES': 

            const idx = state.comparators.findIndex(comparator=>comparator.stringCode===payload.stringCode)

            console.log('payload', payload)
            console.log('state', state)
            let comparatorAdd = state.comparators[idx].add
            let mainChoices = state.comparators[idx].choices[0]
            let auxChoices = state.comparators[idx].choices[1]
            let mainChosen = state.comparators[idx].chosen[0]
            let auxChosen = state.comparators[idx].chosen[1]
            let mainOpen = state.comparators[idx].open[0]
            let auxOpen = state.comparators[idx].open[1]

            if(payload.isMain){
                mainChosen = payload.choice
                mainOpen = false
                switch (payload.choice) {
                    case 'any':
                        comparatorAdd = null
                        break

                    case 'more':
                    case 'more or equals':
                        auxChoices = ['less or equals', 'less']
                        auxChosen = 'less or equals'
                        comparatorAdd = '+'
                        break

                    // case 'more or equals':
                    //     auxChoices = ['less']
                    //     auxChosen = 'less'
                    //     comparatorAdd = '+'
                    //     break

                    case 'equals':
                        comparatorAdd = null
                        break

                    case 'less':
                    case 'less or equals':
                        auxChoices = ['more or equals', 'more']
                        auxChosen = 'more or equals'
                        comparatorAdd='+'
                        break

                    // case 'less or equals':
                    //     auxChoices = ['more']
                    //     auxChosen = 'more or equals'
                    //     comparatorAdd='+'
                    //     break
                
                    default:
                        
                        break;
                }
                if(!auxChoices.includes(auxChosen)) 
                    auxChosen = 'any'
            } else{
                auxChosen = payload.choice
                //auxOpen = false
            }
            auxOpen = false

            console.log('aux choices', auxChoices)

            const newComparartors = [
                ...state.comparators.slice(0, idx),
                {
                    ...state.comparators[idx],
                    chosen: [mainChosen, auxChosen],
                    choices: [ mainChoices, auxChoices],
                    open: [mainOpen, auxOpen],
                    add: comparatorAdd
                },
                ...state.comparators.slice(idx+1)
            ]

            return{
                ...state,
                comparators: newComparartors
            }
        
        case 'COMPARATOR_CHOSEN_CLICKED':
            console.log('CORMPARATOR_CHOSEN_CLICKED', payload, state)

            let comparatorIdx = state.comparators.findIndex(comparator=>comparator.stringCode===payload.stringCode)

            let mainOpenChosen = state.comparators[comparatorIdx].open[0]
            let auxOpenChosen = state.comparators[comparatorIdx].open[1]

            if(payload.isMain){
                mainOpenChosen = !mainOpenChosen
            } else{
                auxOpenChosen = !auxOpenChosen
            }

            let newComparartorsChosen = [
                ...state.comparators.slice(0, comparatorIdx),
                {
                    ...state.comparators[comparatorIdx],
                    open: [mainOpenChosen, auxOpenChosen],
                },
                ...state.comparators.slice(comparatorIdx+1)
            ]

            return{
                ...state,
                comparators: newComparartorsChosen
            }

        case 'SIGN_CLICKED':

            let idxBySignClicked = state.comparators.findIndex(comparator=>comparator.stringCode===payload.stringCode)
            let newComparartor = {
                ...state.comparators[idxBySignClicked],
                add: payload.add==='+'? '-': '+'
            }

            return{
                ...state,
                comparators: [
                    ...state.comparators.slice(0, idxBySignClicked),
                    newComparartor,
                    ...state.comparators.slice(idxBySignClicked + 1)
                ]
            }




        default: 
            return state;
    }
}

export default reducer