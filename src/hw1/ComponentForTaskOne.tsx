import type {ICourse} from "./coursesArray.ts";

function ComponentForTaskOne({title, monthDuration, hourDuration, modules}: ICourse) {
    return (
        <div className="border-2 border-gray-300 rounded-lg w-52 p-4">
            <h1 className="text-2xl font-bold text-blue-600 dark:text-sky-400">{title}</h1>
            <p className="text-sm/8">Month duration: {monthDuration}</p>
            <p className="text-sm/8">Hour duration: {hourDuration}</p>
            <h4>Modules:</h4>
            <ul>
                {modules.map((module) =>
                    <li className="italic " key={module}>
                        {module}
                    </li>
                )}
            </ul>
        </div>
    )
}

export {ComponentForTaskOne};