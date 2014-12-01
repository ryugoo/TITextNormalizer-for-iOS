/**
 * TiTextNormalizer
 *
 * Created by ryugoo
 * Copyright (c) 2014 ryugoo. All rights reserved.
 */

#import "NetImthinkerTiTextnormalizerModule.h"
#import "TiBase.h"
#import "TiHost.h"
#import "TiUtils.h"

@implementation NetImthinkerTiTextnormalizerModule

MAKE_SYSTEM_PROP(NFC, 0);
MAKE_SYSTEM_PROP(NFD, 1);
MAKE_SYSTEM_PROP(NFKC, 2);
MAKE_SYSTEM_PROP(NFKD, 3);

#pragma mark Internal

-(id)moduleGUID
{
    return @"38967155-3371-4f5d-bd8a-649c581bb11b";
}

-(NSString*)moduleId
{
    return @"net.imthinker.ti.textnormalizer";
}

#pragma mark Lifecycle

-(void)startup
{
    [super startup];
    
    NSLog(@"[INFO] %@ loaded",self);
}

-(void)shutdown:(id)sender
{
    [super shutdown:sender];
}

-(void)didReceiveMemoryWarning:(NSNotification*)notification
{
    [super didReceiveMemoryWarning:notification];
}


#pragma Public APIs

-(id)normalize:(id)args
{
    NSString *original;
    NSNumber *form;
    ENSURE_ARG_AT_INDEX(original, args, 0, NSString);
    ENSURE_ARG_AT_INDEX(form, args, 1, NSNumber);
    
    int formValue = [form intValue];
    switch (formValue) {
        case 0:
            return [original precomposedStringWithCanonicalMapping];
            break;
        case 1:
            return [original decomposedStringWithCanonicalMapping];
            break;
        case 2:
            return [original precomposedStringWithCompatibilityMapping];
            break;
        case 3:
            return [original decomposedStringWithCompatibilityMapping];
            break;
    }
}

-(id)isNormalized:(id)args
{
    NSString *original;
    NSNumber *form;
    ENSURE_ARG_AT_INDEX(original, args, 0, NSString);
    ENSURE_ARG_AT_INDEX(form, args, 1, NSNumber);
    
    int formValue = [form intValue];
    BOOL result = NO;
    switch (formValue) {
        case 0:
            result = [original isEqualToString:[original precomposedStringWithCanonicalMapping]];
            break;
        case 1:
            result = [original isEqualToString:[original decomposedStringWithCanonicalMapping]];
            break;
        case 2:
            result = [original isEqualToString:[original precomposedStringWithCompatibilityMapping]];
            break;
        case 3:
            result = [original isEqualToString:[original decomposedStringWithCompatibilityMapping]];
            break;
    }
    return NUMBOOL(result);
}

@end
