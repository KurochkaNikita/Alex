import {ContentLink} from "@/components/content-link";
import {Logo} from "@/components/logo";
import {PageSection} from "@/components/page-section";
import {BookIcon} from "@/icons/book-icon";
import {ClockIcon} from "@/icons/clock-icon";
import {LessonsIcon} from "@/icons/lessons-icon";
import {PlayIcon} from "@/icons/play-icon";


const lessons = [
    {
        id: "orientation",
        title: "Orientation: Understanding Where You Are",
        description:
            "You need to know where you're starting from, before you can pretend to decide where you're going.",
        lessons: [
            {
                id: "landscape-of-choice",
                title: "The Landscape of Choice",
                description:
                    "A practical map for navigating the illusion that you actually have any agency at all.",
                video: {
                    duration: 876,
                    thumbnail:
                        "https://assets.tailwindcss.com/templates/compass/lesson-video-thumbnail-01.png",
                    url: "https://assets.tailwindcss.com/templates/compass/landscape-of-choice.mp4",
                },
            },
            {
                id: "paradox-of-agency",
                title: "The Paradox of Agency",
                description:
                    "Explore whether you're living your life or just reacting to everyone else's.",
                video: null,
            },
            {
                id: "liberation-from-regret",
                title: "Liberation from Regret",
                description:
                    "If no alternative choice was ever possible, regret becomes logically unnecessary.",
                video: {
                    duration: 947,
                    thumbnail:
                        "https://assets.tailwindcss.com/templates/compass/lesson-video-thumbnail-02.png",
                    url: "https://assets.tailwindcss.com/templates/compass/liberation-from-regret.mp4",
                },
            },
            {
                id: "recognizing-patterns",
                title: "Recognizing Patterns",
                description:
                    "Failures weren't freely chosen but were inevitable given your circumstances.",
                video: null,
            },
            {
                id: "values-and-goals",
                title: "Values and Goals",
                description:
                    "Identify patterns in your interests and abilities that reveal your predetermined direction.",
                video: {
                    duration: 1328,
                    thumbnail:
                        "https://assets.tailwindcss.com/templates/compass/lesson-video-thumbnail-04.png",
                    url: "https://assets.tailwindcss.com/templates/compass/values-and-goals.mp4",
                },
            },
        ],
    },
    {
        id: "direction",
        title: "Direction: Choosing a Path",
        description:
            "Experience the sensation of choice without the burden of true responsibility.",
        lessons: [
            {
                id: "mapping-causal-factors",
                title: "Mapping the Causal Factors",
                description:
                    "The causes acting on you can give you insight into where they might take you.",
                video: {
                    duration: 892,
                    thumbnail:
                        "https://assets.tailwindcss.com/templates/compass/lesson-video-thumbnail-03.png",
                    url: "https://assets.tailwindcss.com/templates/compass/mapping-causal-factors.mp4",
                },
            },
            {
                id: "reframing-uncertainty",
                title: "Reframing Uncertainty as Agency",
                description:
                    "If you squint, not being able to predict the future looks sort of like free will.",
                video: null,
            },
            {
                id: "decision-paralysis",
                title: "Overcoming Decision Paralysis",
                description:
                    "You can't be paralysed by choices you don't actually have.",
                video: null,
            },
            {
                id: "path-of-least-resistance",
                title: "Perceiving the Path of Least Resistance",
                description:
                    "Recognizing which direction requires the least psychological struggle.",
                video: {
                    duration: 1147,
                    thumbnail:
                        "https://assets.tailwindcss.com/templates/compass/lesson-video-thumbnail-01.png",
                    url: "https://assets.tailwindcss.com/templates/compass/path-of-least-resistance.mp4",
                },
            },
            {
                id: "surrendering-outcome",
                title: "Surrendering to the Outcome",
                description:
                    "Accepting that whatever path you choose has no bearing on where you'll go.",
                video: {
                    duration: 1423,
                    thumbnail:
                        "https://assets.tailwindcss.com/templates/compass/lesson-video-thumbnail-05.png",
                    url: "https://assets.tailwindcss.com/templates/compass/surrendering-outcome.mp4",
                },
            },
        ],
    },
    {
        id: "navigation",
        title: "Navigation: Steering Through the Inevitable",
        description:
            "Techniques for aligning with your inevitable trajectory while avoiding nihilism.",
        lessons: [
            {
                id: "widening-field-of-view",
                title: "Widening Your Field of View",
                description:
                    "The universe can be cruel and it's important to see that coming.",
                video: {
                    duration: 934,
                    thumbnail:
                        "https://assets.tailwindcss.com/templates/compass/lesson-video-thumbnail-02.png",
                    url: "https://assets.tailwindcss.com/templates/compass/widening-field-of-view.mp4",
                },
            },
            {
                id: "dealing-with-coincidence",
                title: "Dealing with Coincidence",
                description:
                    "If something does go the way you intended, realize that this was purely coincidental.",
                video: null,
            },
            {
                id: "forgiving-others",
                title: "Forgiving Others",
                description:
                    "When actions are beyond one's control, punishment is illogical.",
                video: null,
            },
            {
                id: "anxiety-messages",
                title: "What Anxiety Is Trying to Tell You",
                description:
                    "A lack of control can make you anxious, but realize this has no bearing on outcomes.",
                video: null,
            },
            {
                id: "maintaining-self",
                title: "Maintaining a Sense of Self",
                description:
                    "Who you think you are has been assigned to you by circumstance.",
                video: null,
            },
        ],
    },
    {
        id: "destination",
        title: "Destination: Arriving Where You Must",
        description:
            "How to be content with the inconsequential destiny you've been given.",
        lessons: [
            {
                id: "reframing-achievement",
                title: "Reframing Achievement and Failure",
                description:
                    "Pride and regret are just psychological coping mechanisms.",
                video: null,
            },
            {
                id: "surrendering-to-success",
                title: "Surrendering to Success",
                description:
                    "Achievements reveal capabilities that were always present rather than self development.",
                video: {
                    duration: 1247,
                    thumbnail:
                        "https://assets.tailwindcss.com/templates/compass/lesson-video-thumbnail-02.png",
                    url: "https://assets.tailwindcss.com/templates/compass/surrendering-to-success.mp4",
                },
            },
            {
                id: "giving-credit",
                title: "Giving Credit Where it's Due",
                description:
                    "Recognize the broader system that produced your achievement.",
                video: {
                    duration: 967,
                    thumbnail:
                        "https://assets.tailwindcss.com/templates/compass/lesson-video-thumbnail-04.png",
                    url: "https://assets.tailwindcss.com/templates/compass/giving-credit.mp4",
                },
            },
            {
                id: "unburden-accountability",
                title: "Unburden Yourself from Accountability",
                description:
                    "When things haven't gone your way, it literally couldn't have been your fault.",
                video: {
                    duration: 1123,
                    thumbnail:
                        "https://assets.tailwindcss.com/templates/compass/lesson-video-thumbnail-05.png",
                    url: "https://assets.tailwindcss.com/templates/compass/unburden-accountability.mp4",
                },
            },
            {
                id: "writing-autobiography",
                title: "Exercise: Writing your autobiography",
                description: "A way to come to grips with your inconsequence.",
                video: {
                    duration: 1486,
                    thumbnail:
                        "https://assets.tailwindcss.com/templates/compass/lesson-video-thumbnail-01.png",
                    url: "https://assets.tailwindcss.com/templates/compass/writing-autobiography.mp4",
                },
            },
        ],
    },
];

function formatDuration(seconds: number): string {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);

    return h > 0 ? (m > 0 ? `${h} hr ${m} min` : `${h} hr`) : `${m} min`;
}

export function getValues() {
    return lessons;
}

async function DevOps() {
    const modules = getValues();
    const lessons = modules.flatMap(({lessons}) => lessons);
    const duration = lessons.reduce(
        (sum, {video}) => sum + (video?.duration ?? 0),
        0,
    );

    return (
        <div className="relative mx-auto max-w-7xl">
            <div
                className="absolute -inset-x-2 top-0 -z-10 h-80 overflow-hidden rounded-t-2xl mask-b-from-60% sm:h-88 md:h-112 lg:-inset-x-4 lg:h-128">
                <img
                    alt=""
                    src="https://assets.tailwindcss.com/templates/compass/hero-background.png"
                    className="absolute inset-0 h-full w-full mask-l-from-60% object-cover object-center opacity-40"
                />
                <div
                    className="absolute inset-0 rounded-t-2xl outline-1 -outline-offset-1 outline-gray-950/10 
                    {/*dark:outline-white/10*/}
                    "/>
            </div>
            <div className="mx-auto max-w-6xl">
                <div className="relative">
                    <div className="px-4 pt-48 pb-12 lg:py-24">
                        <Logo className="h-8 fill-gray-950 
                        {/*dark:fill-white*/}
                        "/>
                        <h1 className="sr-only">Course overview</h1>
                        <p className="mt-7 max-w-lg text-base/7 text-pretty text-gray-600 
                        {/*dark:text-gray-400*/}
                        ">
                            A comprehensive journey that helps you navigate uncertainty and
                            make choices aligned with your values and goals.
                        </p>
                        <div
                            className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm/7 font-semibold text-gray-950 sm:gap-3 
                            {/*dark:text-white*/}
                            ">
                            <div className="flex items-center gap-1.5">
                                <BookIcon className="stroke-gray-950/40 
                                {/*dark:stroke-white/40*/}
                                "/>
                                {modules.length} modules
                            </div>
                            <span className="hidden text-gray-950/25 sm:inline 
                            {/*dark:text-white/25*/}
                            ">
                  &middot;
                </span>
                            <div className="flex items-center gap-1.5">
                                <LessonsIcon className="stroke-gray-950/40 
                                {/*dark:stroke-white/40*/}
                                "/>
                                {lessons.length} lessons
                            </div>
                            <span className="hidden text-gray-950/25 sm:inline 
                            {/*dark:text-white/25*/}
                            ">
                  &middot;
                </span>
                            <div className="flex items-center gap-1.5">
                                <ClockIcon className="stroke-gray-950/40 
                                {/*dark:stroke-white/40*/}
                                "/>
                                {formatDuration(duration)}
                            </div>
                        </div>
                        <div className="mt-10">
                            <div
                                // href={`/${modules[0].lessons[0].id}`}
                                className="inline-flex items-center gap-x-2 rounded-full bg-gray-950 px-3 py-0.5 text-sm/7 font-semibold text-white hover:bg-gray-800
                                {/*dark:bg-gray-700 dark:hover:bg-gray-600*/}
                                "
                            >
                                <PlayIcon className="fill-white"/>
                                Start the course
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-y-16 pb-10 sm:px-4">
                        {modules.map((module, index: number) => (
                            <PageSection
                                key={module.id}
                                id={module.id}
                                title={`Part ${index + 1}`}
                            >
                                <div className="max-w-2xl">
                                    <h2 className="text-2xl/7 font-medium tracking-tight text-pretty text-gray-950
                                    {/*dark:text-white*/}
                                    ">
                                        {module.title}
                                    </h2>
                                    <p className="mt-4 text-base/7 text-gray-700 sm:text-sm/7
                                    {/*dark:text-gray-400*/}
                                    ">
                                        {module.description}
                                    </p>

                                    <ol className="mt-6 space-y-4">
                                        {module.lessons.map((lesson) => (
                                            <li key={lesson.id}>
                                                <ContentLink
                                                    title={lesson.title}
                                                    description={lesson.description}
                                                    href={`/${lesson.id}`}
                                                    type="video"
                                                    duration={lesson.video?.duration}
                                                />
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </PageSection>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DevOps