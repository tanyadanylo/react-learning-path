import {ComponentForTaskOne} from "./hw1/ComponentForTaskOne.tsx";
import {coursesArray} from "./hw1/coursesArray.ts";

function App() {
    return (
        <div className="flex gap-4 justify-center p-20 flex-wrap">
            {coursesArray.map((course) => (
                <ComponentForTaskOne
                    key={course.title}
                    title={course.title}
                    monthDuration={course.monthDuration}
                    hourDuration={course.hourDuration}
                    modules={course.modules}
                />
            ))}
        </div>
    )
}

export default App;