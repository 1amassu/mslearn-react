import React from 'react';

function RecipeSteps(props) {
    // Create the list items using map
    const recipeStepItems = props.steps.map((step, index) => {
        return (
            // Return the desired HTML for each ingredient
            <li key={index}>
                { step.name }
            </li>
        );
    });

    // return the HTML for the component
    // ingredientListItems will be rendered as li elements
    return (
        <ol>
            { recipeStepItems }
        </ol>
    );
}

export default RecipeSteps;