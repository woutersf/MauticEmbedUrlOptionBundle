<?php

declare(strict_types=1);

return [
    'name'        => 'Embed URL Option',
    'description' => 'Adds a "Via URL" option to the form embed modal',
    'version'     => '1.0.0',
    'author'      => 'Frederik Wouters',

    'routes' => [],

    'services' => [
        'events' => [
            'mautic.embed_url_option.subscriber' => [
                'class' => MauticPlugin\MauticEmbedUrlOptionBundle\EventListener\FormViewSubscriber::class,
                'arguments' => [
                    'router',
                ],
            ],
        ],
    ],

    'parameters' => [],
];
