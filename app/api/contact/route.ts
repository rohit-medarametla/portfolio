import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    console.log('🔍 [CONTACT API] Request received');
    
    const body = await request.json();
    console.log('📝 [CONTACT API] Body:', body);
    
    const { name, email, subject, message } = body;
    
    // Validate required fields
    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      console.error('❌ [CONTACT API] Missing fields');
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error('❌ [CONTACT API] Invalid email:', email);
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check env vars
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    console.log('🔑 [CONTACT API] Env check - URL:', !!supabaseUrl, 'Key:', !!supabaseKey);

    if (!supabaseUrl || !supabaseKey) {
      console.error('❌ [CONTACT API] Missing Supabase credentials');
      return NextResponse.json(
        { error: 'Server configuration error - missing Supabase credentials' },
        { status: 500 }
      );
    }

    console.log('✅ [CONTACT API] Validation passed, attempting insert...');
    
    const insertData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
      status: 'unread',
    };
    
    console.log('📤 [CONTACT API] Inserting data:', insertData);

    const { data, error } = await supabase
      .from('contact_messages')
      .insert([insertData])
      .select();

    console.log('📊 [CONTACT API] Supabase response - Error:', error, 'Data:', data);

    if (error) {
      console.error('❌ [CONTACT API] Supabase error details:', {
        message: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint,
      });

      return NextResponse.json(
        { 
          error: error.message || 'Failed to save message',
          details: error.details,
          code: error.code,
        },
        { status: 500 }
      );
    }

    console.log('✅ [CONTACT API] Success! Inserted ID:', data?.[0]?.id);
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully!',
        data: data?.[0] 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ [CONTACT API] Exception:', error);
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
