export function create_data() {
    return {
        header_infos: {
            name: "Your Name",
            profession: "Job Title",
            github: "GitHub-Profile",
        },
        objective: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
        contact_details: [
            {icon: "smartphone", value: "+00 000 000 000"},
            {icon: "mail", value: "yourmail@example.com"},
            {icon: "place", value: "Example Street<br/>City, Country", linebreak: true},
        ],
        skills: [
            {name: "Eating", level: 85},
            {name: "Sleeping", level: 85},
            {name: "Tennis", level: 70},
            {name: "Waiting", level: 70},
            {name: "Speaking", level: 65},
            {name: "Travelling", level: 65},
            {name: "Swimming", level: 45},
        ],
        works: [
            {
                position: "Job Title",
                location: "Company, Location",
                time_from: "Jun. 2015",
                time_to: "Present",
                bullets: [
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
                    "Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
                ]
            },
            {
                position: "Job Title",
                location: "Company, Location",
                time_from: "Feb. 2010",
                time_to: "Jun. 2015",
                bullets: [
                    "Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
                ]
            },
        ],
        educations: [
            {
                position: "Master's Degree",
                location: "University, Location",
                time_from: "Apr. 2007",
                time_to: "Sept. 2009",
                bullets: [
                    "Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
                    "Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
                ]
            },
            {
                position: "Bachelors's Degree",
                location: "University, Location",
                time_from: "Apr. 2004",
                time_to: "Mar. 2007",
                bullets: [
                    "Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
                ]
            },
        ],
        others: [
            {
                position: "Extracurricular Activity",
                location: "Somewhere",
                time_from: "Jun. 2009",
                time_to: "Dec. 2012",
                bullets: [
                    "Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
                    "Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
                ]
            }
        ]

    }
}