import { create } from 'zustand'

const UseThemeStore = create((set, get) => ({

    mode : localStorage.getItem('mode')||'light',
    toggleMode : ()=>{
        const currentMode = get().mode;
        console.log("currentMode : ",currentMode)
        set((state)=>({
            mode : state.mode === 'light' ? 'dark' : 'light'
        }))
        localStorage.setItem('mode', get().mode)
    }
}))

export default UseThemeStore