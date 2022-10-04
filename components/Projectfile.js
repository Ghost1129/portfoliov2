import React from 'react';

const ProjectFile = ({project}) => {
    return (
        <div className="bg-red-100  p-4 w-[250px] md:min-w-full aspect-square">
            <h1 className="text-2xl font-bold">{project.name}</h1>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, quia.</p>
        </div>
    );
};

export default ProjectFile;
